import { Button, Form, Input, Wrapper } from './SearchBar.styled';

const SearchForm = ({ handleSubmit, query }) => {
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
