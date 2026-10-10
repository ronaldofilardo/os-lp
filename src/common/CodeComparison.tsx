export function CodeComparison(): JSX.Element {
  return (
    <section className="w-full py-space-xl bg-surface-container-lowest/50 border-t border-outline-variant/30" id="comparacao">
      <div className="max-w-container mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl">
          <div className="flex flex-col gap-space-xs max-w-2xl">
            <span className="font-label-caps text-label-caps text-primary uppercase tracking-wider">// Inspeção de Sintaxe</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Anatomia de um Patch Preventivo
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Compare como o código gerado por IA genérica degrada a base versus a versão refinada sob restrição rígida Omni Sistemas.
            </p>
          </div>
          <span className="font-label-caps text-label-caps px-3 py-1 rounded bg-surface-container-high text-on-surface-variant border border-outline-variant/40 w-fit">
            Exemplo ilustrativo
          </span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
          <div className="rounded-lg bg-surface-container-low border border-error/40 overflow-hidden flex flex-col justify-between">
            <div>
              <div className="px-space-md py-2.5 bg-error-container/10 border-b border-error/30 flex items-center justify-between">
                <div className="flex items-center gap-space-xs text-error font-code-sm text-code-sm font-semibold">
                  <span className="material-symbols-outlined text-[16px]">cancel</span>
                  <span>Código de IA sem supervisão</span>
                </div>
                <span className="font-code-sm text-code-sm text-error/80">UserDashboard.tsx</span>
              </div>
              <div className="p-space-md font-code-sm text-code-sm bg-surface-container-lowest text-on-surface-variant overflow-x-auto leading-relaxed">
                <pre className="font-code-sm"><code>{`// UI + Fetch acoplados, sem tipagem e sem try/catch
export default function UserDashboard() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    // Alucinação comum: fetch direto no useEffect sem abort ou erro
    fetch('/api/users/billing')
      .then(res => res.json())
      .then(resData => {
        // Exposição direta de campos brutos da tabela
        setData(resData.raw_user_row);
      });
  }, []);

  return (
    <div>
      <h1>{data?.usr_nm_full || 'Carregando...'}</h1>
      <span>Saldo: {data?.acc_bal_cents}</span>
    </div>
  );
}`}</code></pre>
              </div>
            </div>
            <div className="p-space-md border-t border-error/20 bg-error-container/5 flex flex-col gap-1.5 font-code-sm text-code-sm text-error">
              <div className="flex items-center gap-2"><span>✕</span> <span>Sem tipagem estrita: uso indiscriminado de <code>any</code></span></div>
              <div className="flex items-center gap-2"><span>✕</span> <span>Lógica de API acoplada no componente de apresentação</span></div>
              <div className="flex items-center gap-2"><span>✕</span> <span>Sem tratamento de erro: falha silenciosa em caso de 500</span></div>
            </div>
          </div>
          <div className="rounded-lg bg-surface-container-low border border-secondary/40 overflow-hidden flex flex-col justify-between">
            <div>
              <div className="px-space-md py-2.5 bg-secondary-container/10 border-b border-secondary/30 flex items-center justify-between">
                <div className="flex items-center gap-space-xs text-secondary font-code-sm text-code-sm font-semibold">
                  <span className="material-symbols-outlined text-[16px]">check_circle</span>
                  <span>Código Omni Sistemas</span>
                </div>
                <span className="font-code-sm text-code-sm text-secondary/80">UserDashboard.view.tsx</span>
              </div>
              <div className="p-space-md font-code-sm text-code-sm bg-surface-container-lowest text-on-surface-variant overflow-x-auto leading-relaxed">
                <pre className="font-code-sm"><code>{`// Clean View • DTO tipado rigidamente • Hook isolado
export function UserDashboardView() {
  const { account, isLoading, error } = useUserBilling();

  if (error) return <ErrorTelemetryNotice error={error} />;
  if (isLoading || !account) return <SkeletonMetricCard />;

  return (
    <MetricCardContainer>
      <TypographyHeadline>{account.customerName}</TypographyHeadline>
      <FormattedBalanceBadge value={account.formattedBalance} />
    </MetricCardContainer>
  );
}`}</code></pre>
              </div>
            </div>
            <div className="p-space-md border-t border-secondary/20 bg-secondary-container/5 flex flex-col gap-1.5 font-code-sm text-code-sm text-secondary">
              <div className="flex items-center gap-2"><span>✓</span> <span>Hook isolado reutilizável com proteção de ciclo de vida</span></div>
              <div className="flex items-center gap-2"><span>✓</span> <span>Tipagem forte com contratos e DTOs imutáveis</span></div>
              <div className="flex items-center gap-2"><span>✓</span> <span>Manutenibilidade garantida: UI sob 40 linhas legíveis</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}