---
layout: post
title: Information Scrambling
description: Quantifying the spreading of quantum information
date: 2024-11-15 00:55:31 +0530
---

<style>
.justified-text {
  font-family: 'EB Garamond', serif;
  text-align: justify;
}
</style>



<div class="justified-text">

To be updated. 


<!-- <p>Interactions in quantum systems can spread initially localized quantum information into the exponentially many degrees of freedom of the entire system. Central to understanding quantum scrambling is the concept of out-of-time-order correlators (OTOC). </p>

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
where $\mathcal{L}_c$ is Hermitian Liouvillian superoperator given by $\mathcal{L}_c = [H,\,\bullet\, ]$. The operator $\mathcal{O}(t)$ can be expressed as a span of the nested commutators with the initial operator due to the repeated action of the Liouvillian. One constructs an orthonormal basis $\{|O_n)\}_{n=0}^{K-1}$ from this nested span of commutators, by choosing a certain scalar product $(\cdot|\cdot)$ on operator space. This orthogonal basis is known as the <i>Krylov basis</i> and is achieved with the Lanczos algorithm --- a three term recursive version of the Gram-Schmidt orthogonalization method.</p>

<p>Once, the orthonormal basis is established, we can write the expansion of the operator $\mathcal{O}(t)$ as
\begin{equation}
\mathcal{O}(t) = \sum_{n = 0}^{K-1} i^n \phi_n(t) |O_n)
\end{equation}
The amplitudes $\phi_n(t)$ evolve according to the recursion relation $\partial_t\phi_n(t) = b_{n-1}\phi_{n-1}(t) - b_n\phi_{n+1}(t)$ with the initial conditions $\phi_n(0)=\delta_{n,0}$. The Lanczos coefficients $b_n$ can be thought of as hopping amplitudes for the initial operator $\mathcal{O}_0$ localized at the initial site to explore the <i>Krylov chain</i>. The increase in support of operator away from the origin in Krylov chain reflects the growth of complexity as higher Krylov basis vectors are generated. To quantify this, one defines the average position of the operator in Krylov chain --- called the Krylov complexity as 
\begin{equation}
C(t) = (\mathcal{O}(t)|\mathcal{K}|\mathcal{O}(t)) = \sum_{n=0}^{K-1} n|\phi_n(t)|^2 
\end{equation}
where $\mathcal{K} = \sum_{n=0}^{K-1}n|O_n)(O_n|$ is position operator in the Krylov chain. </p>

<p>The growth of Krylov complexity obeys an upper bound given by,
\begin{equation}\label{eq:bound_isolated}
|\partial_t C(t)| \leq 2b_1 \Delta \mathcal{K},
\end{equation}
where the dispersion of the position operator $\mathcal{K}$ is defined as $(\Delta \mathcal{K})^2 =\langle \mathcal{K}^2\rangle -\langle \mathcal{K}\rangle ^2$. One can define a characteristic time scale $\tau_K = \Delta \mathcal{K}/|\partial_t C(t)$ to write an analogue of the Mandelstam-Tamm bound as $\tau_K b_1\geq 1/2$.
 </p>

<h3>Our contributions</h3>

<h4>K-complexity in open-quantum systems</h4>

<p>In open systems where the system interacts with an environment with weak coupling (Markovian bath), the dynamics of any operator is described by the Lindblad master equation
\begin{equation}
\mathcal{L}_o[\bullet] = [H,\bullet] - i\sum_k \left[L^\dagger_k\bullet L_k - \frac{1}{2}\{L^\dagger_k L_k,\bullet\}\right]
\end{equation}
where the operators $\{L_k\}$ are the Lindblad or the jump operators -- describes the nature of the interaction between the system and the environment. Since the Krylov basis $\{\mathcal{L}_o^n\mathcal{O}_0\}^{K-1}_{n=0}$ constructed from such a evolution in non-Hermitian, the usual Lanczos algorithm fails to orthonormalize them. Therefore, one resorts to alternatives such as Arnoldi or Bilanczos algorithms that are applicable to non-hermitian cases. In particular, the Bilanczos algorithm generates a bi-orthonormal basis $\{|p_n),|q_n)\}^{K-1}_{n=0}$ using the span $\{\mathcal{L}_o^n\mathcal{O}_0\}^{K-1}_{n=0}$ and $\{(\mathcal{L}_o)^\dagger \mathcal{O}_0\}^{K-1}_{n=0}$. These basis vectors obey the orthonormality relation $(q_m|p_n) = \delta_{mn}$. In such a basis, the non-Hermitian Lindbladian $\mathcal{L}_o$ can be written in a tridiagonal form 
\begin{align}\label{recurrence relations}
	c_{j+1} |p_{j+1}) &=\mathcal{L}_{o} |p_j) -a_j |p_j )  -b_{j} |p_{j-1})\,  \\
	b^*_{j+1} |q_{j+1}) &= \mathcal{L}_{o}^\dagger |q_j) - a^*_j |q_j) -c^*_{j} |q_{j-1})\,.
\end{align}
The bra and ket versions of the time-evolved operator $\mathcal{O}(t)$ can, therefore, be expanded as 
\begin{equation}\label{operator expansion}
	\begin{split}
|\mathcal{O}(t)\rangle &= \sum_n i^n \phi_n(t) |p_n ), \\ 
\langle \mathcal{O}(t)| &= \sum_n (-i)^n \psi^*_n (t) ( q_n|.
	\end{split}
\end{equation}
The amplitudes $\phi_n(t)$ and $\psi_n(t)$ evolve according to the recursion relation 
\begin{equation}
	\label{differential equation for coefficients}
	\begin{split}
		\dot{\phi}_n(t) &= ia_n \phi_n - b_{n+1}\phi_{n+1} + c_n \phi_{n-1} \\
		\dot{\psi}^*_n(t) &= -ia^*_n \psi^*_n - c^*_{n+1}\psi^*_{n+1} + b^*_n \psi^*_{n-1}
	\end{split}
\end{equation}
with the initial conditions $\phi_n(0) = \psi_n(0 ) = \delta_{n,0}$. In ref. we shows that in open-quantum systems, the coefficients $a_n,b_n$ and $c_n$ obeys $b_n = c_n = |b_n|$ and $a_n = i|a_n|$, therefore, in what follows, we assume this to be valid. With this, the recursion relation for the amplitudes becomes $\dot{\phi}_n(t) = -|a_n| \phi_n - |b_{n+1}|\phi_{n+1} + |b_n| \phi_{n-1}$ and $\psi_n(t) = \phi_n(t)$. Therefore, in open systems, in addition to hopping amplitude $b_n$, there exist additional on site potentials $-|a_n|$. The purely imaginary nature of these on-site potentials result in decay of K-complexity showing the loss of information to environment. The K-complexity in analogy to isolated system case can be treated as
\begin{equation}
C(t) = \sum_{n=0}^{K-1} n\psi_n^*(t) \phi_n(t) = \sum_{n=0}^{K-1} n|\phi_n(t)|^2\,.
\end{equation}
 and also define the complexity operator in using the bi-orthogonal basis $|p_n), |q_n)$ as, 
 \begin{equation}
     \label{eq:complexityoperator}
     \mathcal{K} = \sum_{n =1}^{K-1} n|p_n)(q_n|\,.
 \end{equation}
 The growth bound translates to 
 \begin{equation}\label{eq:dispersion_bound}
	\left|\partial_tP(t) \cdot C(t) - \partial_t C(t) \right|^2 \leq 4|b_1|^2 (P(t))^2  \langle (\Delta \tilde{\mathcal{K}}^\dagger)^2 \rangle 
\end{equation}
</p>

<h4>Non-local quantum systems</h4>
We study two types of non-local quantum systems --

The fast scrambling spin-1/2 Hamiltonian
\begin{equation}\label{eq:Ham_fast}
    \mathcal{H} = \mathcal{H}_\text{local} - \frac{\gamma}{\sqrt{N}} \sum_{i<j} \sigma^z_i \sigma^z_j,
\end{equation}
where $\sigma^z_i$ is the Pauli $z$ operator acting on site $i$ and $\mathcal{H}_\text{local}$ is Hamiltonian with only local interactions.

The one-dimensional transverse mixed field Ising model of $N$ spins with open boundary conditions 
\begin{equation}\label{eq:mixed_TFIM}
    \mathcal{H}_\alpha = -\sum_{i<j} J^\alpha_{ij} \sigma^z_i \sigma^z_j - g \sum_{i} \sigma^x_j- h \sum_{j} \sigma^{z}_{j}
\end{equation}
where $J^\alpha_{ij}$ is interaction strength between spins at position $i$ and $j$ which assume to follow powerlaw $1/\kappa \cdot J/|i-j|^\alpha$. Throughout our study, we take $J=1$, and $\kappa =1$.

<p><b>References</b></p>


Speed limits to the growth of Krylov complexity in open quantum systems <sup>&dagger;</sup><br>
<small> Aranya Bhattacharya, Pingal Pratyush Nath, <i>Himanshu Sahu</i> (Mar 06, 2024) <br>
Published in: Phys. Rev. D 109, L121902 (2024) &nbsp;  <a href="https://arxiv.org/abs/2403.03584" target="_blank" rel="noopener noreferrer">
<i class="ai ai-arxiv"></i></a> &nbsp;<a href="https://doi.org/10.1103/PhysRevD.109.L121902" target="_blank" rel="noopener noreferrer"><i class="ai ai-doi"></i></a><br>
</small>


On Krylov complexity in open systems: an approach via bi-Lanczos algorithm <sup>&dagger;</sup><br>
<small> Aranya Bhattacharya, Pratik Nandy, Pingal Pratyush Nath, <i>Himanshu Sahu</i> (Mar 7, 2023) <br>
Published in: JHEP 12 (2023) 066 &nbsp;  <a href="https://arxiv.org/abs/2303.04175" target="_blank" rel="noopener noreferrer">
<i class="ai ai-arxiv"></i></a> &nbsp;<a href="https://doi.org/10.1007/JHEP12(2023)066" target="_blank" rel="noopener noreferrer"><i class="ai ai-doi"></i></a><br>
</small>

Operator growth and Krylov construction in dissipative open quantum systems <sup>&dagger;</sup><br>
<small> Aranya Bhattacharya, Pratik Nandy, Pingal Pratyush Nath, <i>Himanshu Sahu</i> (Jul 12, 2022) <br>
Published in: J. High Energ. Phys. 2022, 81 (2022) &nbsp;  <a href="https://arxiv.org/abs/2207.05347" target="_blank" rel="noopener noreferrer">
<i class="ai ai-arxiv"></i></a> &nbsp;<a href="https://doi.org/10.1007/JHEP12(2022)081" target="_blank" rel="noopener noreferrer"><i class="ai ai-doi"></i></a><br>
</small>
 -->

</div>

