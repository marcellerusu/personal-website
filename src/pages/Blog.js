import { useEffect } from "react";
import styled from "styled-components";

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
  useEffect(() => {
    window.hljs.highlightAll();
  });
  return (
    <Container>
      <section>
        <p>
          I've added a few new features to my language{" "}
          <a href="https://github.com/marcellerusu/peacock-lang">peacock</a>{" "}
          that I'm really happy with & would like to share.
        </p>
        <p>
          As a very brief summary, peacock is a language that compiles to
          javascript & keeps most of its semantics while adding powerful pattern
          matching constructs.
        </p>

        <p>
          One thing that makes Peacock special is how easy it is to define &
          name patterns via schemas.
        </p>
        <pre>
          <code class="language-javascript">
            {`
schema Zero = 0
Zero(num) := 10 // => MatchError

schema Nat = #{ % >= 0 }
Nat(num) := 10
Nat(num) := -10 // => MatchError

`.trim()}
          </code>
        </pre>
        <p>
          These are some basic examples of how patterns & schemas work. Now lets
          take a brief detour back to javascript.
        </p>
        <p>
          One of the more unique aspects of JavaScript is it's dynamic binding
          of the "this" variable. Notably you can pass in a different value for
          "this" by using "Function.prototype.call".
        </p>
        <p>This is correct, totally fine™ javascript.</p>
        <pre>
          <code class="language-javascript">
            {`
function add(num) {
  return this + num;
}

add.call(10, 20) // 30
          `.trim()}
          </code>
        </pre>
        <p>
          This feature may not seem particularly helpful at face value BUT there
          is something really powerful here which just needs a little syntax
          sugar to let it shine.
        </p>
        <p>
          Enter the bind operator. (This feature was an active proposal for
          javascript but it doesn't seem to have made progress recently)
        </p>
        <pre>
          <code class="language-javascript">
            {`
function add(num) {
  return this + num;
}

10::add(20)
`.trim()}
          </code>
        </pre>
        <p>This looks very similar in peacock so we'll return to that.</p>
        <pre>
          <code class="language-javascript">
            {`
function add(num) = this + num

10::add 20
`.trim()}
          </code>
        </pre>
        <p>
          Lets look at something more useful.
          <br />
          Something that I really miss from working in ruby is the ability to
          call #to_a on pretty much anything & it would work as expected.
        </p>
        <pre>
          <code class="language-javascript">{`
function to_a = Array.from this

[1, 2, 3]::to_a // => [1, 2, 3]
new Set([1, 2, 3])::to_a // => [1, 2, 3]
"123"::to_a // ["1", "2", "3"]
`}</code>
        </pre>
        <p>
          This is great! I really really love this syntax for a few reasons but
          primarily
          <ul>
            <li>Its chainable!</li>
            <li>It feels idiomatic!</li>
            <li>
              We can "extend" core objects without modifying their prototype!!
            </li>
          </ul>
          <br></br>
          That last point is especially important for me. There are so many
          missing methods on Arrays & Objects that I would absolutely love like
          #uniq & #zip (as well as making everything snake_case).
          <br />
          But I don't like modifying the prototype because of the inherent risk
          of the method being overwritten & from a user's perspective it would
          be nice to know this method is a user defined change.
          <br />
          Now when I see <code>::</code>, I can go "Oh this is an extension
          method!"
        </p>
        <p>There's one problem though...</p>
        <pre>
          <code class="language-javascript">{`
{ a: 10 }::to_a // []
`}</code>
        </pre>
        <p>
          As much as Array.from is great & has served me more than I've expect
          it to, it has its limits. That's where case functions & Bind Patterns
          come in.
          <br />
          First lets take a quick look at how to define case functions.
        </p>
        <pre>
          <code class="language-javascript">
            {`
case function fib
when (0)
  0
when (1)
  1
when (n)
  fib(n - 1) + fib(n - 2)
end

console.log fib(3) // 2
`.trim()}
          </code>
        </pre>
        <p>
          This is a simple case function definition for fibonacci sequence. We
          pattern match on the function arguments & if you've seen this before
          there's nothing very new here.
          <br />
          When I was implemented the bind operator & played around with it, it
          became obvious that I was missing something here. There's always an
          implicit parameter to each function in JavaScript - "this" & it should
          be included in the pattern match. This can fix our issue with calling{" "}
          <code>::to_a</code> on objects.
        </p>
        <pre>
          <code class="language-javascript">
            {`
case function to_a
when Array::()
  this
when String::() | Set::()
  Array.from this
when Object::()
  Object.entries this
end

console.log "abc"::to_a // ["a", "b", "c"]
console.log [1, 2]::to_a // [1, 2]
console.log new Set([1, 1])::to_a // [1]
// most importantly
console.log { a: 10 }::to_a // [["a", 10]]
`.trim()}
          </code>
        </pre>
        <p>
          The syntax is specified in this way -
          <br />
          what comes before the <code>::</code> is a pattern on "this", and what
          comes after is a pattern on the function arguments.
        </p>
        <p>
          This makes me so happy. I think the syntax lends itself very naturally
          & paves a way for defining a new standard library on top of plain
          JavaScript objects without modifying anything!
        </p>
        <p>Here are some other examples I'm excited about</p>

        <pre>
          <code class="language-javascript">
            {`

// I'm not familiar with performant implementations for unique, so go easy on me :)
case function uniq
when Array::()
  new Set(this)::to_a
when Array::(String(key))
  this.filter((x, i) => i === this.findIndex(y => x[key] === y[key]))
when Array::(Function(fn))
  this.filter((x, i) => i === this.findIndex(y => fn(x) === fn(y)))
end


console.log [1, 2, 2]::uniq
// => [1, 2]
console.log [{ a: 10 }, { a: 10 }]::uniq "a"
// => [{ a: 10 }]
console.log [22, 31, 32]::uniq #{ |item| item % 10 }
// => [22, 31]

case function zip
when (first, second)
  first.map((x, i) => [x, second[i]])
when Array::(second)
  zip this, second
end

console.log zip([1, 2], [3, 4])
// => [[1, 3], [2, 4]]
console.log [1, 2]::zip([3, 4])
// => [[1, 3], [2, 4]]
`.trim()}
          </code>
        </pre>
        <p>Thanks for reading.</p>
      </section>
    </Container>
  );
}

export default Blog;
