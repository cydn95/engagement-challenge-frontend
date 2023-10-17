import { useMemo, useState } from 'react';

import { defaultPageSize } from 'shared/configs/constants';

interface usePaginationProps {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  data: any[];
}

export const usePagination = ({ data }: usePaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(defaultPageSize);

  const totalItems = useMemo(() => data.length, [data]);

  const totalPages = useMemo(() => Math.ceil(totalItems / pageSize), [totalItems, pageSize]);

  const pageData = useMemo(() => {
    const newData = data.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    return newData;
  }, [data, currentPage, pageSize]);

  const handleChangePage = (pageNum: number) => {
    setCurrentPage(pageNum);
  };

  const handleChangePageSize = (newPageSize: number) => {
    setPageSize(newPageSize);
    setCurrentPage(1);
  };

  return {
    data: pageData,
    totalItems,
    totalPages,
    currentPage,
    pageSize,
    onChangePage: handleChangePage,
    onChangePageSize: handleChangePageSize,
  };
};
