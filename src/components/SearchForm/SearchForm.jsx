import { useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Div, Form, Input, Button } from './SearchForm.styled';

export function SearchForm() {
  let [searchParams, setSearchParams] = useSearchParams();
  const inputForm = useRef();

  useEffect(() => {
    const query = searchParams.get('query');
    if (query) {
      inputForm.current.value = query;
    }
  }, [searchParams]);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: e.target.search.value });
  };

  return (
    <Div>
      <Form action="" onSubmit={handleSubmit}>
        <Input
          ref={inputForm}
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <Button type="submit">Search</Button>
      </Form>
    </Div>
  );
}
