import React from 'react';
import { Pagination, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext, PaginationContent } from '@/components/ui/pagination';

interface PaginationComponentProps {
    currentPage: number;
    setCurrentPage: (page: number) => void;
    totalPages: number | undefined;
}

const PaginationComponent: React.FC<PaginationComponentProps> = ({ currentPage, setCurrentPage, totalPages }) => {
    return (
        <Pagination className="mt-12">
            <PaginationContent>
                {currentPage > 1 && <PaginationItem>
                    <PaginationPrevious onClick={() => setCurrentPage(currentPage - 1)} />
                </PaginationItem>}
                <PaginationItem>
                    <PaginationLink onClick={() => setCurrentPage(currentPage)} isActive>{currentPage}</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext onClick={() => setCurrentPage(currentPage + 1)} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>)
}

export default PaginationComponent;


