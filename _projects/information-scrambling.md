---
layout: post
title: Information Scrambling
description: Quantifying the spreading of quantum information
---

<style>
.justified-text {
  font-family: 'EB Garamond', serif;
  text-align: justify;
}
</style>


<div class="justified-text">

<p>Interactions in quantum systems can spread initially localized quantum information into the exponentially many degrees of freedom of the entire system. Central to understanding quantum scrambling is the concept of out-of-time-order correlators (OTOC). </p>

<p>Out-of-time-ordered correlators (OTOCs) allow us to measure the growth of operators. Consider two local operators, $W$ and $V$, in a one-dimensional spin chain. The idea is to study  the spread of $W(t) = e^{iHt} W e^{-iHt}$ using another operator $V$, which is a simple spin operator located at some distance $l$ from $W$. This can be done by looking at the expectation value of the squared commutator:
\begin{equation}\label{eq.otoc.definition}
	C(l,t) = \frac{1}{2}\left \langle [W(t),V]^\dagger [W(t),V]\right\rangle
\end{equation}
Initially, this value will be zero for well-separated operators, but it will become significantly different from zero once $W(t)$ has spread to the location of $V$. In the special case where $W$ and $V$ are Hermitian and unitary, the squared commutator can be written as $C(l,t) = 1 -  \text{Re}[\langle W(t) VW(t) V\rangle]$ with $F(t) = \langle W(t) V W(t) V\rangle$ showing explictly the out-of-time ordering nature of the operators.</p>


<p>Another quantitative measure of quantum scrambling --- Krylov complexity. Krylov complexity (K-complexity) is a measure of the delocalization of a local initial operator evolving under Heisenberg evolution with respect to the Hamiltonian. </p>


<p>In an isolated system, the evolution of any operator $\mathcal{O}_o$ under a time-independent Hamiltonian $H$ is described by the Heisenberg equation of motion,
\begin{equation}
\mathcal{O}(t) = e^{itH}\mathcal{O}_0 e^{-itH} = e^{i\mathcal{L}_ct} O_0 = \sum_{n=0}^\infty \frac{(it)^n}{n!}\mathcal{L}^n_c \mathcal{O}_0,
\end{equation}
where $\mathcal{L}_c$ is Hermitian Liouvillian superoperator given by $\mathcal{L}_c = [H,\,\bullet\, ]$. The operator $\mathcal{O}(t)$ can be expressed as a span of the nested commutators with the initial operator due to the repeated action of the Liouvillian. One constructs an orthonormal basis $\{|O_n)\}_{n=0}^{K-1}$ from this nested span of commutators, by choosing a certain scalar product $(\cdot|\cdot)$ on operator space. This orthogonal basis is known as the \textit{Krylov basis} and is achieved with the Lanczos algorithm --- a three term recursive version of the Gram-Schmidt orthogonalization method.</p>


</div>

<!-- 
Example modified from [here](http://www.unexpected-vortices.com/sw/rippledoc/quick-markdown-example.html){:target="_blank"}.

H1 Header
============

Paragraphs are separated by a blank line.

2nd paragraph. *Italic*, **bold**, and `monospace`. Itemized lists
look like:

  * this one
  * that one
  * the other one

Note that the actual text
content starts at 4-columns in.

> Block quotes are
> written like so.
>
> They can span multiple paragraphs,
> if you like.


H2 Header
------------

Here's a numbered list:

 1. first item
 2. second item
 3. third item

Note again how the actual text starts at 4 columns in (4 characters
from the left side). Here's a code sample:

    # Let me re-iterate ...
    for i in 1 .. 10 { do-something(i) }

As you probably guessed, indented 4 spaces. By the way, instead of
indenting the block, you can use delimited blocks, if you like:

~~~
define foobar() {
    print "Welcome to flavor country!";
}
~~~

(which makes copying & pasting easier). You can optionally mark the
delimited block for Pandoc to syntax highlight it by specifying the languagae after the start of a block (e.g. `~~~cpp`) which would look like :

~~~cpp
#include <iostream>
using namespace std;

int main() 
{    
    cout << "Size of char: " << sizeof(char) << " byte" << endl;
    cout << "Size of int: " << sizeof(int) << " bytes" << endl;
    cout << "Size of float: " << sizeof(float) << " bytes" << endl;
    cout << "Size of double: " << sizeof(double) << " bytes" << endl;

    return 0;
}
~~~

### An H3 header ###

Now a nested list:

 1. First, get these ingredients:

      * carrots
      * celery
      * lentils

 2. Boil some water.

 3. Dump everything in the pot and follow
    this algorithm:

        find wooden spoon
        uncover pot
        stir
        cover pot
        balance wooden spoon precariously on pot handle
        wait 10 minutes
        goto first step (or shut off burner when done)

    Do not bump wooden spoon or it will fall.

Notice again how text always lines up on 4-space indents (including
that last line which continues item 3 above).

Here's a footnote [^1].

[^1]: Some footnote text.

Tables can look like this:

| Header 1 | Header 2                   | Header 3 |
|:--------:|:--------------------------:|:--------:|
| data1a   | Data is longer than header | 1        |
| d1b      | add a cell                 |          |
| lorem    | ipsum                      | 3        |
|          | empty outside cells        |          |
| skip     |                            | 5        |
| six      | Morbi purus                | 6        |


A horizontal rule follows.

***

Here's a definition list:

apples
  : Good for making applesauce.

oranges
  : Citrus!

tomatoes
  : There's no "e" in tomatoe.

Again, text is indented 4 spaces. (Put a blank line between each
term and  its definition to spread things out more.)

Here's a "line block" (note how whitespace is honored):

| Line one
|   Line too
| Line tree

and images can be specified like so:

![example image](https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=300&h=300&fit=crop "An exemplary image")

Inline math equation: $\omega = d\phi / dt$. Display
math should get its own line like so:

$$I = \int \rho R^{2} dV$$ -->
