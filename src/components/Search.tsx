import { useState } from 'react';
import { useRouter } from 'next/router';

function Search() {
  const [keyword, setKeyword] = useState('');
  const router = useRouter();

  const onSearch: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (keyword.length === 0) {
      return;
    }

    const query = new URLSearchParams({
      keyword,
    });
    router.push(`/events/search?${query}`);
    setKeyword('');
  };

  return (
    <form onSubmit={onSearch} className="mx-auto w-full max-w-sm">
      <input
        className="h-8 w-full rounded border border-[#777] p-1.5"
        type="search"
        name="keyword"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search Events"
      />
    </form>
  );
}

export default Search;
