"use client";

import Card from "@/components/Card";
import Search from "@/components/Search";
import { useEffect, useState } from "react";

interface Entity {
  id: number;
  specimen_id: string;
  provisional_name: string;
  classification_status: string;
  created_at: string;
}

export default function Dashboard() {
  return (
    <main className="flex flex-col items-center justify-start gap-4 p-4">
      <div className="h-lvh bg-yellow-50">
        <Search placeholder="Search for a specimen..." />
      </div>
    </main>
  );
}
