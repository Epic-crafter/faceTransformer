import Image from "next/image";
import List from "./List";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

// Define interfaces for expected props
interface PlacementPartnerData {
  value: string;
  name: string;
}

interface ParagraphFieldData {
  heading?: string;
  paragraph?: string;
}

interface CertifiedByData {
  title?: string;
  name?: string;
  list?: { value: string }[];
  url?: string;
}

interface ListFormatData {
  title?: string;
  style?: "star" | "step" | "tick" | "number" | "alphabet" | "dot";
  list?: { value: string }[];
}

interface TableFieldData {
  title?: string;
  table: string[][];
}

interface ImageFormatData {
  url?: string;
}

interface HiringPartnerData {
  paragraph?: string;
  list: { value: string }[];
}

interface CompanyData {
  id: string;
  logoUrl: string;
  companyName: string;
}

interface ApprovalData {
  id: string;
  logoUrl: string;
  approvalName: string;
}

// PlacementPartners component
export const PlacementPartners = ({
  data,
  name,
}: {
  data: { list: PlacementPartnerData[] };
  name: string;
}) => {
  return (
    <>
      <h2>Placement partners of {name}</h2>
      <div className="flex flex-wrap gap-4">
        {data?.list?.map((data, index) => (
          <div
            key={index}
            className="border mt-5 rounded-xl shadow overflow-hidden py-1 px-4 bg-white flex flex-col justify-between items-center text-lg font-medium"
          >
            <Image
              width={100}
              height={100}
              src={data.value}
              alt={"Brand Image"}
            />
            <p>{data.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

// ParagraphField component
export const ParagraphField = ({ data }: { data: ParagraphFieldData }) => {
  return (
    <>
      {data?.heading && <h2>{data?.heading}</h2>}
      <div
        className="contentParagraph mt-2 mb-2 text-sm md:text-lg lg:text-xl"
        dangerouslySetInnerHTML={{
          __html: `${data?.paragraph}`,
        }}
      />
    </>
  );
};

// CertifiedBy component
export const CertifiedBy = ({
  data,
  Expand,
}: {
  data:any;
  name: string;
  Expand: (url: string) => void;
}) => {
  return (
    <>
      <h2 className="capitalize">
        {data?.title || `Sample Certificates of ${data?.name}`}
      </h2>
      <div className="flex lg:flex-row flex-col-reverse items-center pr-16 justify-between">
        <div>
          <List style={"star"} data={data?.list} />
        </div>
        {data?.url && (
          <Image
            width={200}
            height={180}
            className="cursor-pointer w-auto h-auto object-cover"
            onClick={() => Expand(data?.url)}
            src={data?.url}
            alt={"University certificate"}
          />
        )}
      </div>
    </>
  );
};

// ListFormat component
export const ListFormat = ({ data }: { data:any }) => {
  return (
    <div>
      {data.title && <h2>{data.title}</h2>}
      <List style={data.style} data={data.list} />
    </div>
  );
};

// TableField component
export const TableField = ({ data }: { data: TableFieldData }) => {
  return (
    <>
      {data?.title && <h2>{data?.title}</h2>}
      <Table className="my-5 text-black rounded-lg overflow-hidden">
        <TableHeader>
          <TableRow>
            {data?.table[0].map((headCell, index) => (
              <TableHead
                className="bg-blue-100 lg:text-lg font-semibold text-black"
                key={index}
              >
                {headCell}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody className="border shadow">
          {data?.table?.slice(1).map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <TableCell key={cellIndex} className="border-t">
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

// ImageFormat component
export const ImageFormat = ({ data }: { data: ImageFormatData }) => {
  return (
    <>
      <Image
        width={1000}
        height={500}
        className="object-cover w-full my-6"
        src={data?.url || "/image/default.jpg"}
        alt={"College image"}
      />
    </>
  );
};

// HiringPartnerFormat component
export const HiringPartnerFormat = ({
  data,
  title,
  companies,
}: {
  data: HiringPartnerData;
  title: string;
  companies: CompanyData[];
}) => {
  return (
    <>
      <h2 className="capitalize">{title} hiring partners</h2>
      <p>{data?.paragraph}</p>
      <List style={"star"} data={data.list} />
      <div className="text-xl mt-5 flex flex-wrap lg:justify-evenly gap-2 font-semibold p-4 rounded bg-primary/15">
        <p>
          <span className="text-primary text-4xl">3X</span> OPPORTUNITIES
        </p>
        <p>
          <span className="text-primary text-4xl">250+</span> HIRING PARTNERS
        </p>
        <p>
          <span className="text-primary text-4xl">45%</span> AVG SALLARY HIKE
        </p>
      </div>
      <Button className="my-3 hover:bg-primary/90 rounded pointer-events-none bg-primary/90">
        OUR STUDENTS WORK HERE
      </Button>
      <div className="flex mt-1 mb-5 md:gap-2">
        {companies?.map((data) => (
          <div
            className="border rounded-md bg-white md:scale-100 scale-90 overflow-hidden"
            key={data.id}
          >
            <Image
              alt="companies"
              width={100}
              height={150}
              className="mx-2"
              src={data?.logoUrl}
            />
            <div className="text-ellipsis whitespace-nowrap bg-blue-200 justify-center flex w-full">
              {<p className="!text-[12px]">{data?.companyName}</p>}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

// Approvals component
export const Approvals = ({
  title,
  approvals,
}: {
  title: string;
  approvals: ApprovalData[];
}) => {
  return (
    <>
      <h2 className="capitalize">{title} Approved By</h2>
      <div className="flex gap-3 mt-2 lg:gap-2">
        {approvals?.map((approval) => (
          <div
            className="border rounded-md bg-white md:scale-100 scale-90 overflow-hidden"
            key={approval.id}
          >
            <Image
              alt="approval"
              width={100}
              height={150}
              className="m-2 rounded"
              src={approval?.logoUrl}
            />
            <div className="text-ellipsis whitespace-nowrap bg-blue-200 justify-center flex w-full">
              {<p className="!text-base font-medium">{approval?.approvalName}</p>}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
