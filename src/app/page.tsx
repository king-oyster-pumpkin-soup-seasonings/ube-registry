"use client";

import Card from "@/components/Card";
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
    <main>
      <div className="h-lvh bg-yellow-50"></div>
    </main>
  );
}
