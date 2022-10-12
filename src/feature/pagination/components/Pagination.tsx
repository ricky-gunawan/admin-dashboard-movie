import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useAppDispatch, useAppSelector } from "../../../shared/hooks";
import { firstPage, lastPage, nextPage, prevPage } from "../models";

export const Pagination = () => {
  const { page, totalPages } = useAppSelector((store) => store.pagination);
  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-center items-center gap-4">
      <div className="flex items-center justify-center">
        <div className="flex cursor-pointer">
          {page === 1 ? (
            ""
          ) : (
            <div onClick={() => dispatch(firstPage())} className="rounded-l-md border bg-amber-400 px-2 py-1 text-neutral-50 hover:scale-105">
              <ChevronDoubleLeftIcon className="w-6 h-6" />
            </div>
          )}
          {page === 1 ? (
            ""
          ) : (
            <div onClick={() => dispatch(prevPage())} className="border bg-amber-400 px-2 py-1 text-neutral-50 hover:scale-105">
              {page - 1}
            </div>
          )}
          <div className="border bg-amber-600 px-2 py-1 text-neutral-50 hover:scale-105">{page}</div>
          {page === totalPages ? (
            ""
          ) : (
            <div onClick={() => dispatch(nextPage())} className="border bg-amber-400 px-2 py-1 text-neutral-50 hover:scale-105">
              {page + 1}
            </div>
          )}

          {page === totalPages ? (
            ""
          ) : (
            <div onClick={() => dispatch(lastPage())} className="rounded-r-md border bg-amber-400 px-2 py-1 text-neutral-50 hover:scale-105">
              <ChevronDoubleRightIcon className="w-6 h-6" />
            </div>
          )}
        </div>
      </div>
      <div className="font-semibold">
        <span>Total Pages : </span>
        <span>{totalPages}</span>
      </div>
    </div>
  );
};
