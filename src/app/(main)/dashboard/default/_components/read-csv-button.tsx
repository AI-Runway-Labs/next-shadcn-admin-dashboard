"use client";

import { useState } from "react";

import { FileText, Loader2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

export function ReadCsvButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleReadCsv = async () => {
    setIsLoading(true);

    try {
      const response = await fetch("/api/cash-tracker/read-csv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to read CSV");
      }

      const data = await response.json();

      toast.success("CSV read successfully", {
        description: data.message ?? "The CSV file has been processed.",
      });
    } catch (error) {
      toast.error("Failed to read CSV", {
        description: error instanceof Error ? error.message : "An unexpected error occurred.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button onClick={handleReadCsv} disabled={isLoading} className="gap-2">
      {isLoading ? (
        <>
          <Loader2 className="size-4 animate-spin" />
          Reading CSV...
        </>
      ) : (
        <>
          <FileText className="size-4" />
          Read CSV
        </>
      )}
    </Button>
  );
}
