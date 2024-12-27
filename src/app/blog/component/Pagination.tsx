import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
} from "@/components/ui/pagination";
import { PaginationPrevious } from "@/components/ui/pagination";

const PaginationComponent = ({
  currentPage,
  totalPages,
  onPageChange,
}: any) => {
  const handlePageClick = (page: any) => {
    onPageChange(page);
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <PaginationItem key={i}>
          <PaginationLink
            size="icon"
            href="#"
            isActive={i === currentPage}
            onClick={(e) => {
              e.preventDefault();
              handlePageClick(i);
            }}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
    return pages;
  };

  return (
    <Pagination className="flex justify-end">
      <PaginationContent>
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious
              size="icon"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageClick(currentPage - 1);
              }}
            />
          </PaginationItem>
        )}
        {renderPageNumbers()}
        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationNext
             size = "icon"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageClick(currentPage + 1);
              }}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationComponent;
