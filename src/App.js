import styled from "styled-components";

const Container = styled.div`
  font-family: monospace;
  margin-right: auto;
`;

const Post = styled.div`
  background: white;
  padding: 10px;
`;

function App() {
  return (
    <Container>
      {posts.map((post) => (
        <Post>
          {post.split("\n").map((line) => (
            <p>{line}</p>
          ))}
        </Post>
      ))}
    </Container>
  );
}

const posts = [
  `I don't make the notes be what I want them to be anymore

  I let them be boring & work within that because I know that's the truth
  
  that's the closest thing I can get to truth
  
  whats true is whats smooth, what flows
  
  truth can change faster than anything
  
  but it flows & the fluid is full of life & "meaning"
  
  -- August 6 2021`,
];

export default App;
