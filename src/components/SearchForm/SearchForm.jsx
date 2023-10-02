import { useSearchParams } from 'react-router-dom';
import { Button, Form, Input, Wrapper } from './SearchBar.styled';
import { toast } from 'react-toastify';

const SearchForm = () => {
  const [searchParam, setSearchParam] = useSearchParams();

  const query = searchParam.get('query') || '';

  const handleSubmit = event => {
    event.preventDefault();

    const searchValue = event.target.elements.search.value.trim();

    if (searchValue === '') {
      toast.warn('Please try to type something');
      return;
    }

    const validSearchParam = searchValue !== '' ? { query: searchValue } : '';

    setSearchParam(validSearchParam);
  };
  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Type movie title here"
          defaultValue={query}
        />
        <Button type="submit">Search</Button>
      </Form>
    </Wrapper>
  );
};

export default SearchForm;
