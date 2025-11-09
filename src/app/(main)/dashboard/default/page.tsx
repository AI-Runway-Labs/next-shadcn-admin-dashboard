import { ChartAreaInteractive } from "./_components/chart-area-interactive";
import { DataTable } from "./_components/data-table";
import data from "./_components/data.json";
import { ReadCsvButton } from "./_components/read-csv-button";
import { SectionCards } from "./_components/section-cards";

export default function Page() {
  return (
    <div className="@container/main flex flex-col gap-4 md:gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Cash Runway</h1>
        <ReadCsvButton />
      </div>
      <SectionCards />
      <ChartAreaInteractive />
      <DataTable data={data} />
    </div>
  );
}
