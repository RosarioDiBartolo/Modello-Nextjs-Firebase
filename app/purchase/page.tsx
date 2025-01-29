import PurchaseSidebar from "@/components/widgets/purchase/purchase-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";
import Products from "@/components/widgets/purchase/products";
import { Input } from "@/components/ui/input";

function Purchase() {
  return (
    <SidebarProvider>
      <PurchaseSidebar />
      <div className=" flex-1">
        <header
          className="
        px-6
        p-3
        sticky
        top-0
        border-y
        bg-secondary/60
        text-secondary-foreground/60
        backdrop-blur-md
        z-20
        "
        >
          <div className=" max-w-screen-2xl mx-auto"> 
          <div className=" flex items-center justify-between gap-8 py-2"> 
          <div className=" py-2">
            {" "}
            Request a <span className=" text-lime-200"> custom </span> product.
          </div>
          <Input placeholder="Search..." className="w-auto !rounded-xl bg-input/70" />
          </div>
          <hr />
          <div className=" flex gap-8 items-center py-1 ">
            <h2 className=" text-xl">
              <span className=" text-secondary-foreground"> Category </span>{" "}
              products
            </h2>
           </div>
           </div>
        </header>
        <main className=" flex-1 relative z-10">
          <Products />
        </main>
         
      </div>
      <video autoPlay loop muted className=" fixed inset-0  ">
        <source src="/video-background.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </SidebarProvider>
  );
}

export default Purchase;
