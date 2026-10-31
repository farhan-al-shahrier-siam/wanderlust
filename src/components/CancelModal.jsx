"use client"
import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import React from "react";
import { FaTrash } from "react-icons/fa";

const CancelModal = ({ bookingId }) => {
    const handleCancel = async () => {

        const {data: tokenData} = await authClient.token()

        const res = await fetch(`http://localhost:8000/bookings/${bookingId}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${tokenData?.token}`
            },
        });
        const data = await res.json();
        window.location.reload()
    };

    return (
        <div>
            <AlertDialog>
                <Button variant="outline" className={"text-red-500 "}>
                    Cancel <FaTrash></FaTrash>
                </Button>
                <AlertDialog.Backdrop>
                    <AlertDialog.Container>
                        <AlertDialog.Dialog className="sm:max-w-[400px]">
                            <AlertDialog.CloseTrigger />
                            <AlertDialog.Header>
                                <AlertDialog.Icon status="danger" />
                                <AlertDialog.Heading>Cancel booking permanently?</AlertDialog.Heading>
                            </AlertDialog.Header>
                            <AlertDialog.Body>
                                <p>
                                    This will permanently delete <strong>My Awesome Project</strong> and all of its data. This action cannot be undone.
                                </p>
                            </AlertDialog.Body>
                            <AlertDialog.Footer>
                                <Button slot="close" variant="tertiary">
                                    Cancel
                                </Button>
                                <Button onClick={handleCancel} slot="close" variant="danger">
                                    Cancel Booking
                                </Button>
                            </AlertDialog.Footer>
                        </AlertDialog.Dialog>
                    </AlertDialog.Container>
                </AlertDialog.Backdrop>
            </AlertDialog>
        </div>
    );
};

export default CancelModal;
