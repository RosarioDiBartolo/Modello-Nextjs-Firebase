"use client";
import React, { PropsWithChildren, useState } from "react";
import Image from "next/image";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Cyberpunk Skull",
    description: "A detailed cyberpunk-style skull for 3D printing.",
    price: 19.99,
    category: "Models",
    preview: "https://picsum.photos/200"},
  {
    id: 2,
    name: "Articulated Dragon",
    description: "A fully articulated dragon model with movable joints.",
    price: 29.99,
    category: "Toys",
    preview: "https://picsum.photos/200"},
  {
    id: 3,
    name: "Sci-Fi Helmet",
    description: "A futuristic sci-fi helmet ready for 3D printing.",
    price: 49.99,
    category: "Props",
    preview: "https://picsum.photos/200"},
  {
    id: 4,
    name: "Mechanical Hand",
    description: "A prosthetic-style mechanical hand with moving fingers.",
    price: 34.99,
    category: "Mechanical",
    preview: "https://picsum.photos/200"},
  {
    id: 5,
    name: "Dinosaur Skeleton",
    description: "A detailed model of a dinosaur skeleton for assembly.",
    price: 39.99,
    category: "Educational",
    preview: "https://picsum.photos/200"},
  {
    id: 6,
    name: "Fantasy Sword",
    description: "A high-fantasy sword design ready for 3D printing.",
    price: 24.99,
    category: "Weapons",
    preview: "https://picsum.photos/200"},
  {
    id: 7,
    name: "Low-Poly Fox",
    description: "A stylish low-poly fox figurine.",
    price: 9.99,
    category: "Decor",
    preview: "https://picsum.photos/200"},
  {
    id: 8,
    name: "Miniature Castle",
    description: "A detailed miniature castle for tabletop gaming.",
    price: 22.99,
    category: "Miniatures",
    preview: "https://picsum.photos/200"},
  {
    id: 9,
    name: "Steampunk Goggles",
    description: "Classic steampunk-style goggles for cosplay.",
    price: 27.99,
    category: "Wearables",
    preview: "https://picsum.photos/200"},
  {
    id: 10,
    name: "Robot Companion",
    description: "A small and cute robot companion figure.",
    price: 14.99,
    category: "Toys",
    preview: "https://picsum.photos/200"},
  {
    id: 11,
    name: "Architectural Model - Modern House",
    description: "A scaled model of a modern architectural house.",
    price: 59.99,
    category: "Architecture",
    preview: "https://picsum.photos/200"},
  {
    id: 12,
    name: "Alien Bust",
    description: "A detailed alien bust model ready for printing.",
    price: 19.99,
    category: "Sci-Fi",
    preview: "https://picsum.photos/200"},
  {
    id: 13,
    name: "Gothic Candle Holder",
    description: "A gothic-inspired candle holder for your home decor.",
    price: 12.99,
    category: "Decor",
    preview: "https://picsum.photos/200"},
  {
    id: 14,
    name: "Wall Mount for Headphones",
    description: "A simple and sleek wall mount for storing headphones.",
    price: 7.99,
    category: "Accessories",
    preview: "https://picsum.photos/200"},
  {
    id: 15,
    name: "Puzzle Cube",
    description: "A fun and intricate puzzle cube for 3D printing.",
    price: 11.99,
    category: "Toys",
    preview: "https://picsum.photos/200"},
];

type productType = (typeof products)[number];

const Product = ({
  product,
  setSelected,
}: {
  product: productType;
  setSelected: (id: number) => void;
}) => {
  return (
    <motion.div
      initial = {{
        "--tw-gradient-via-position": "0%"
      }}
      whileHover={{
        "--tw-gradient-via-position": "100%"

      }}
      transition={{
        duration: .7,

        ease: "easeInOut"
      }}
      tabIndex={0}
      onClickCapture={(e) => {
        setSelected(product.id);
        e.stopPropagation();
      }}

      className="
      max-w-fit
        transition

        focus-within:-translate-y-5
        focus-within:shadow-lg
        
        focus-within:outline-neutral-200
        outline outline-transparent outline-offset-4
        border
        backdrop-blur-md
        text-foreground/60
        bg-gradient-to-tr from-background   via-zinc-700 to-background
        p-4
        rounded-xl
        "
    >
      <div className=" p-4 border rounded-xl backdrop-brightness-75 ">
      <Image src={product.preview} className=" mx-auto rounded-xl" alt={"Preview"} width={200} height={200} />

      </div>
      <div className=" my-2"> 
       <h3 className=" l  font-bold text-lg">{product.name}</h3>
      <p className=" text-muted-foreground">{product.description}</p>
      </div>
    </motion.div>
  );
};

const Overview = ({ selectedProduct }: { selectedProduct: number }) => {
  return (
  <motion.div layout className=" sticky top-20 bottom-0 h-screen w-96 min-w-96 bg-secondary  ">
      efef
  </motion.div>);
};

function Products() {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  return (
    <section className="relative">
      <div className=" flex bg-gradient-to-r from-lime-950/50 backdrop-blur-md"> 
      <LayoutGroup>
        <motion.div
        layout
          onClick={(e) => setSelectedProduct(null)}
          className="
          grid auto-rows-min  p-10 gap-6 md:grid-cols-3
          "
        >
          {products.map((product) => (
            <Product
              product={product}
              setSelected={setSelectedProduct}
              key={product.id}
            />
          ))}
        </motion.div>{" "}
        <AnimatePresence mode="wait"> 
        {selectedProduct !== null && (
          <Overview selectedProduct={selectedProduct} />
        )}
        </AnimatePresence>
      </LayoutGroup>
      </div>
    </section>
  );
}

export default Products;
