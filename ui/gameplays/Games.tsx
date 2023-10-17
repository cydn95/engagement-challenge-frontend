import { useEffect, useState } from 'react';

import { Button } from 'components/Button';
import { Pagination } from 'components/Pagination';
import { useRouter } from 'next/router';
import { useLazyGetGameplaysByParamQuery, useLazyGetGameplaysQuery } from 'services/game/api';
import { StaticLink } from 'shared/configs/links';
import { usePagination } from 'shared/hooks/usePagination';
import Filter from 'ui/gameplays/list/Filter';
import { Gameplays } from 'ui/gameplays/list/Gameplays';
import { SectionContainer } from 'ui/layout';

import type { Game, GameplaySearchArgKey } from 'services/game/api';

export const Games = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [gameplays, setGameplays] = useState<Game[]>([]);

  const [fetchGameplays] = useLazyGetGameplaysQuery();
  const [fetchGameplaysByParam] = useLazyGetGameplaysByParamQuery();

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const res = await fetchGameplays({}).unwrap();
      setGameplays(res ? [...(res as unknown as Game[])] : []);
      setIsLoading(false);
    };

    getData();
  }, []);

  const handleSearchAll = async () => {
    try {
      setIsLoading(true);
      const res = await fetchGameplays({}).unwrap();
      setGameplays(res ? [...(res as unknown as Game[])] : []);
    } catch (e) {
      setGameplays([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchByValue = async (type: string, value: string) => {
    try {
      setIsLoading(true);
      const res = await fetchGameplaysByParam({ key: type as GameplaySearchArgKey, value }).unwrap();
      setGameplays(res ? [...(res as unknown as Game[])] : []);
    } catch (e) {
      setGameplays([]);
    } finally {
      setIsLoading(false);
    }
  };

  const {
    data: pageData,
    totalItems,
    totalPages,
    currentPage,
    pageSize,
    onChangePage,
    onChangePageSize,
  } = usePagination({ data: gameplays });

  return (
    <SectionContainer>
      <div className="flex items-center justify-between pb-4 border-b">
        <h1 className="text-[40px] font-bold">Gameplays</h1>
        <Button
          variant="primary"
          onClick={() => {
            router.push(StaticLink.AddNewGameplay);
          }}
        >
          Add New Gameplay
        </Button>
      </div>
      <Filter onSearchByValue={async (type, value) => handleSearchByValue(type, value)} onSearchAll={handleSearchAll} />
      <Gameplays gameplays={pageData} isLoading={isLoading} />
      <Pagination
        show={totalPages > 1}
        currentPage={currentPage}
        totalItems={totalItems}
        totalPages={totalPages}
        pageSize={pageSize}
        onChangePage={onChangePage}
        onChangePageSize={onChangePageSize}
      />
    </SectionContainer>
  );
};
