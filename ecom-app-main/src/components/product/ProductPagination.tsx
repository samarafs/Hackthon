"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";


function ProductPagination({count} : any) {


    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const pathname = usePathname();

    const page = searchParams.get("page") || 1;
    const params = new URLSearchParams(searchParams);
    const ITEMS_PER_PAGE = 5;
    const hasPre = ITEMS_PER_PAGE * (Number(page) - 1) > 0;
    const hasNext = ITEMS_PER_PAGE * (Number(page) -1) + ITEMS_PER_PAGE < count;
    const handleClick = (type : string) => {
        type === "prev" ?
        params.set("page", String(Number(page) - 1)) :
        params.set("page", String(Number(page) + 1))
        replace(`${pathname}?${params.toString()}`)
    }
  return (
    <div className="join grid grid-cols-2 w-96 mt-7 justify-center">
    <button className="join-item btn btn-outline" disabled={!hasPre} onClick={() => handleClick("prev")}>Previous page</button>
    <button className="join-item btn btn-outline" disabled={ !hasNext}  onClick={() => handleClick("next")}>Next</button>
  </div>
  );
}

export default ProductPagination;
