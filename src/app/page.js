const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
import Banner from "@/components/Banner";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
    </div>
  );
}
