import { useEffect, useContext } from "react";
import styled from "styled-components";
import { header, subHeader } from "../components/Header";

const Container = styled.div`
  margin: 25px 10% 0 10%;
  @media (max-width: 700px) {
    margin: ${({ isTop }) => (isTop ? "25px 0 0 0" : "0")};
    padding-left: 0.5em;
    padding-right: 0.5em;
  }
  padding-top: ${({ isTop }) => (isTop ? "0" : "25px")};
  position: sticky;
  top: 0px;
  display: flex;
  flex-direction: column;
  z-index: 20;
  hr {
    width: 100%;
  }
  /* Mobile */
  h1 {
    text-align: center;
    line-height: 1em;
    padding-bottom: 0.25em;
  }
  p {
    text-indent: 1em;
    padding-bottom: 1em;
  }
  pre {
    margin-top: 0;
  }
`;

function Blog() {
  let [, setHeader] = useContext(header);
  let [, setSubHeader] = useContext(subHeader);
  useEffect(() => {
    window.hljs.highlightAll();
    setHeader("Toy JS - Compile-to-js Lanugage");
    setSubHeader("Marcelle Rusu | Sept 26 2022");
  }, [setHeader, setSubHeader]);
  return (
    <Container>
      <section>
        <p>
          I made a{" "}
          <a href="https://github.com/marcellerusu/toy-js">new language</a>, and
          its written in itself!
        </p>
        <p>
          Toy JS is a very small language inspired by Ruby, Jakt and of course
          JavaScript. Its mostly a syntax sugar language, there's a few quirks
          but it was mostly developed as a{" "}
          <a href="https://youtube.com/watch?v=TXEn17hBAFc&list=PLEpvTEuFyPtrD2gYvX277Q8wMpAA3qz7R">
            youtube series
          </a>
          .
        </p>
        <p>Most of the language is quite identical to JavaScript.</p>
        <pre>
          <code className="language-ruby">
            {`
console.log("hello world")
`.trim()}
          </code>
        </pre>
        <p>
          But there are a few OO features I really like. For example dataclasses
        </p>
        <pre>
          <code className="language-ruby">
            {`
dataclass Person(name, age)

let marcelle = new Person("Marcelle", 25)

console.log(marcelle.name, marcelle.age) # Marcelle 25
`.trim()}
          </code>
        </pre>
        <p>
          I find myself writing a lot of these empty classes for the sake of
          nominal typing when writing AST nodes. So this cut down on the
          boilerplate heavily.
        </p>
        <p>Regular classes also have something similar:</p>
        <pre>
          <code className="language-ruby">
            {`
class Person(name, age)
  def print
    console.log(this.name, this.age)
  end
end
`.trim()}
          </code>
        </pre>
        <p>
          I find that I very very rarely write any code in a constructor other
          than setting the instance variables, so I added the ability for the
          constructor to be generated.
        </p>
        <p>
          Another syntax shorthand I like, which I took from Jakt is using a
          prefix dot ".prop" instead of "this." everywhere. I thought I would
          prefer just implicit lookup like ruby or java but it was too difficult
          for me to implement neatly as a transpiled language so I tried the
          prefix dot & I think its pretty nice
        </p>
        <pre>
          <code className="language-ruby">
            {`
class Person(name, age)
  def print
    # notice \`this\` is not needed
    console.log(.name, .age)
  end
end
`.trim()}
          </code>
        </pre>
        <p>
          Also after living in ruby long enough I can't stand working in
          languages without postfix ifs :)
        </p>
        <pre>
          <code className="language-ruby">
            {`
def div(a, b) = a + b

def calc(num)
  assert_not_reached! "can't divide by zero" if num === 0
  return div(10, num)
end
`.trim()}
          </code>
        </pre>
        <p>
          I another feature I honestly don't have a use for but thought would be
          fun:
        </p>
        <pre>
          <code className="language-javascript">
            {`
let four = comptime! 2 + 2
`.trim()}
          </code>
        </pre>
        <p>
          This evaluates the rhs of comptime! at compile time. I thought I might
          have some fun with it but honestly for now its just a fun quirk. There
          were also some plans on adding some command/macro system, so far just
          have 2 manually embedded commands in the compiler "comptime!" and
          "assert_not_reached!"
        </p>
        <p>
          Maybe I'll figure out what to do there, but I'm still pretty
          unfamiliar with the ideas of marcos & friends.
        </p>

        <p>
          In the end, I'm pretty happy with the language I ended up with, I
          wanted to show that writing a parser by hand isn't too bad & I've
          never written a proper bootstrapped language before so it was nice to
          see it all come together within just 2 weeks.
        </p>
        <p>Thanks for reading.</p>
        <p>
          <a href="https://github.com/marcellerusu/toy-js">Github Source</a> |{" "}
          <a href="https://youtube.com/watch?v=TXEn17hBAFc&list=PLEpvTEuFyPtrD2gYvX277Q8wMpAA3qz7R">
            YouTube
          </a>
        </p>
      </section>
    </Container>
  );
}

export default Blog;
