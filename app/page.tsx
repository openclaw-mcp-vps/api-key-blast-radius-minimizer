export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          API Security
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
          Minimize Damage When{" "}
          <span className="text-[#58a6ff]">API Keys Leak</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Automatically scope API keys to minimum required permissions across AWS, GCP, and Azure.
          Real-time monitoring alerts you the moment something looks wrong.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started — $25/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">For DevOps engineers and security teams. Cancel anytime.</p>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[
            { title: "Auto-Scope Keys", desc: "Analyze usage and reduce permissions to the minimum required automatically." },
            { title: "Breach Detection", desc: "Real-time alerts when unusual access patterns are detected across your cloud providers." },
            { title: "Multi-Cloud", desc: "Unified dashboard for AWS IAM, GCP Service Accounts, and Azure AD credentials." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$25</p>
          <p className="text-[#8b949e] text-sm mb-6">/month per workspace</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            {[
              "Unlimited API key scoping",
              "Real-time breach alerts",
              "AWS, GCP & Azure support",
              "Slack & email notifications",
              "Audit log & compliance reports"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does automatic key scoping work?",
              a: "We analyze your cloud provider's access logs to determine which permissions are actually used, then generate a least-privilege policy and apply it to your API keys."
            },
            {
              q: "What counts as an unauthorized usage pattern?",
              a: "Requests from new IP ranges, unusual geographic locations, off-hours access, or permission escalation attempts all trigger alerts in real time."
            },
            {
              q: "Is my cloud credentials data stored securely?",
              a: "We use read-only IAM roles and never store your secret keys. All analysis happens via temporary, scoped tokens that expire after each session."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="text-white font-semibold mb-2">{item.q}</p>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-8">
        &copy; {new Date().getFullYear()} API Key Blast Radius Minimizer. All rights reserved.
      </footer>
    </main>
  );
}
