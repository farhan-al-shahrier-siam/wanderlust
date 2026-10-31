"use client"
import { Spinner } from '@heroui/react';
import React from 'react';

const error = () => {
    return (
        <div>
                    <div className="flex flex-col items-center gap-2">
                        <Spinner color="danger" />
                        <span className="text-xs text-muted">Danger</span>
                    </div>
                </div>
    );
};

export default error;