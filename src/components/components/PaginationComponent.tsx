import React from 'react';
import {
  Pagination,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationContent,
} from '@/components/components/ui/pagination';

interface PaginationComponentProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
}

const DOTS = '...';

const getPageNumbers = (
  totalPages: number,
  currentPage: number,
  siblingCount: number = 1
): (number | string)[] => {
  const totalPageNumbers = siblingCount * 2 + 5;

  if (totalPages <= totalPageNumbers) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
  const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

  const showLeftDots = leftSiblingIndex > 2;
  const showRightDots = rightSiblingIndex < totalPages - 1;

  const firstPageIndex = 1;
  const lastPageIndex = totalPages;

  if (!showLeftDots && showRightDots) {
    const leftRange = Array.from({ length: 3 + 2 * siblingCount }, (_, i) => i + 1);
    return [...leftRange, DOTS, totalPages];
  }

  if (showLeftDots && !showRightDots) {
    const rightRange = Array.from({ length: 3 + 2 * siblingCount }, (_, i) => totalPages - (3 + 2 * siblingCount) + 1 + i);
    return [firstPageIndex, DOTS, ...rightRange];
  }

  if (showLeftDots && showRightDots) {
    const middleRange = Array.from({ length: 2 * siblingCount + 1 }, (_, i) => leftSiblingIndex + i);
    return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
  }

  return [];
};

const PaginationComponent: React.FC<PaginationComponentProps> = ({
  currentPage,
  setCurrentPage,
  totalPages,
}) => {
  const paginationRange = getPageNumbers(totalPages, currentPage);

  return (
    <Pagination className="mt-12">
      <PaginationContent>
        {/* Previous Button */}
        <PaginationItem>
          <PaginationPrevious
            onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
            className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
          />
        </PaginationItem>

        {/* Page Numbers & Dots */}
        {paginationRange.map((page, index) => (
          <PaginationItem key={index}>
            {page === DOTS ? (
              <span className="px-3 py-1 text-gray-500">...</span>
            ) : (
              <PaginationLink
                onClick={() => setCurrentPage(Number(page))}
                isActive={page === currentPage}
              >
                {page}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}

        {/* Next Button */}
        <PaginationItem>
          <PaginationNext
            onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
            className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationComponent;
