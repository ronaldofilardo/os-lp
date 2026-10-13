function Icon({ name, className = '' }: { readonly name: string; readonly className?: string }): React.JSX.Element {
  return (
    <span aria-hidden="true" translate="no" className={`material-symbols-outlined ${className}`}>
      {name}
    </span>
  )
}

function MiniButton({ icon, label, danger = false }: { readonly icon: string; readonly label: string; readonly danger?: boolean }): React.JSX.Element {
  return (
    <span className={`skeuo-button-ghost inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium ${danger ? 'text-red-700' : 'text-slate-700'}`}>
      <Icon name={icon} className="text-[14px]" />
      {label}
    </span>
  )
}

function ProfessionalCard(): React.JSX.Element {
  return (
    <div className="os-slide-up skeuo-card rounded-2xl p-4" style={{ animationDelay: '0.1s' }}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="w-10 h-10 rounded-xl bg-blue-100 text-slate-800 flex items-center justify-center">
            <Icon name="person" className="text-[22px]" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-slate-900">Dra. Helena Prado</span>
            <span className="text-xs text-emerald-700 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              Cardiologia
            </span>
          </span>
        </div>
        <span className="text-[10px] font-bold bg-slate-200/70 text-slate-800 rounded-full px-2.5 py-1">Médica</span>
      </div>
      <div className="mt-3 flex items-center justify-between gap-2 rounded-xl bg-[#eef2ff] px-3 py-2 text-xs text-slate-700">
        <span className="flex items-center gap-1.5 min-w-0">
          <Icon name="location_on" className="text-[16px] text-slate-500" />
          <span className="truncate">Rua das Palmeiras, 410</span>
        </span>
        <MiniButton icon="content_copy" label="Copiar" />
      </div>
      <div className="mt-3 flex justify-end gap-2">
        <MiniButton icon="edit" label="Editar" />
        <MiniButton icon="delete" label="Excluir" danger />
      </div>
    </div>
  )
}

function FamilyCard(): React.JSX.Element {
  return (
    <div className="os-slide-up skeuo-card rounded-2xl p-4 ml-6 sm:ml-10 -mt-1" style={{ animationDelay: '0.45s' }}>
      <div className="flex items-center justify-between gap-2">
        <span className="flex flex-col leading-tight">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Familiares</span>
          <span className="text-sm font-semibold text-slate-900">Dados dos familiares</span>
        </span>
        <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-800 text-white text-xs font-semibold">
          <Icon name="add" className="text-[14px]" />
          Adicionar
        </span>
      </div>
      <div className="mt-3 flex items-center justify-between rounded-xl bg-[#eef2ff] px-3 py-2.5">
        <span className="flex items-center gap-2.5">
          <span className="w-8 h-8 rounded-full bg-pink-100 text-pink-600 text-[11px] font-bold flex items-center justify-center">MR</span>
          <span className="flex flex-col leading-tight">
            <span className="text-xs font-semibold text-slate-900">Marina Rocha</span>
            <span className="text-[11px] text-slate-500">Cônjuge · sem login próprio</span>
          </span>
        </span>
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-800 text-white text-xs font-semibold">
          <Icon name="edit" className="text-[13px]" />
          Editar
        </span>
      </div>
    </div>
  )
}

function ResultToast(): React.JSX.Element {
  return (
    <div className="os-toast absolute -bottom-5 -right-2 sm:-right-6 skeuo-chip rounded-2xl px-4 py-3 flex items-center gap-3 shadow-lg">
      <span className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
        <Icon name="science" className="text-[20px]" />
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-xs font-bold text-slate-900">Hemograma disponível</span>
        <span className="text-[11px] text-slate-500">Marina Rocha · agora</span>
      </span>
      <span className="w-2 h-2 rounded-full bg-emerald-500 skeuo-led-green animate-pulse" />
    </div>
  )
}

export function AppPreview(): React.JSX.Element {
  return (
    <div className="relative" role="img" aria-label="Prévia do aplicativo OmniSaúde: profissionais de saúde, dados dos familiares e aviso de exame disponível">
      <div className="panel-glow absolute -inset-6 rounded-3xl opacity-60 blur-2xl" style={{ background: 'radial-gradient(circle at 30% 20%, rgba(14,165,233,0.18), transparent 60%), radial-gradient(circle at 80% 80%, rgba(16,185,129,0.16), transparent 60%)' }} />
      <div className="os-float relative rounded-3xl border border-slate-200 bg-[#f4f6ff] shadow-xl overflow-hidden">
        <div className="flex items-center justify-between bg-white/80 px-4 py-3 border-b border-slate-200">
          <span className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-emerald-700 to-emerald-500 text-white flex items-center justify-center">
              <Icon name="shield_lock" className="text-[16px]" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-xs text-slate-800">Omni Saúde</span>
              <span className="text-[10px] font-bold text-slate-700 mt-0.5">Profissionais</span>
            </span>
          </span>
          <span className="w-7 h-7 rounded-full bg-[#0A2F51] text-white text-[10px] font-bold flex items-center justify-center">RO</span>
        </div>
        <div className="p-4 flex flex-col gap-3">
          <ProfessionalCard />
          <FamilyCard />
        </div>
      </div>
      <ResultToast />
    </div>
  )
}
