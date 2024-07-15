import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: {
    id: string;
  };
}

export default function CategoryPage({ params }: Props) {
  const { id } = params;

  if (id === 'kid') {
    notFound();
  }

  return <div>Category Page {id}</div>;
}
