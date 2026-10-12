'use client'

import { usePanelTicker, formatBrl } from '@/hooks/usePanelTicker'
import { PanelRow, IntegrationChip } from './panelParts'

const INTEGRATIONS = ['Asaas', 'Banco', 'ERP', 'WhatsApp'] as const

export function BusinessPanel(): JSX.Element {
  const { pix, boletos, activeRow } = usePanelTicker()

  return (
    <div className="relative w-full max-w-md mx-auto lg:mx-0">
      <div
        className="panel-glow absolute -inset-6 rounded-3xl opacity-60 blur-2xl"
        style={{ background: 'radial-gradient(circle at 30% 20%, rgba(14,165,233,0.18), transparent 60%), radial-gradient(circle at 80% 80%, rgba(16,185,129,0.14), transparent 60%)' }}
        aria-hidden="true"
      />
      <div className="relative skeuo-card rounded-2xl overflow-hidden">
        <div className="panel-scan" aria-hidden="true" />
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white">
          <div className="flex items-center gap-2">
            <span className="panel-led w-2.5 h-2.5 rounded-full bg-emerald-500 skeuo-led-green" aria-hidden="true" />
            <span className="text-sm font-bold text-slate-900">Painel de Operação</span>
          </div>
          <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200">Atualizado agora</span>
        </div>
        <div className="px-5 py-2">
          <PanelRow index={0} isActive={activeRow === 0} icon="bolt" label="Pix recebido automaticamente" value={formatBrl(pix)} tone="green" />
          <PanelRow index={1} isActive={activeRow === 1} icon="description" label="Boletos emitidos hoje" value={`${boletos} boletos`} tone="blue" />
          <PanelRow index={2} isActive={activeRow === 2} icon="credit_card" label="Assinaturas renovadas" value="97% ativas" tone="green" />
          <PanelRow index={3} isActive={activeRow === 3} icon="sync" label="Conciliação bancária" value="Em tempo real" tone="blue" spinIcon />
        </div>
        <div className="px-5 py-4 border-t border-slate-100 bg-gradient-to-b from-slate-50/50 to-white">
          <span className="text-xs font-bold text-slate-600 uppercase tracking-wide">Integrações ativas</span>
          <div className="flex flex-wrap gap-2 mt-2">
            {INTEGRATIONS.map((label, index) => (
              <IntegrationChip key={label} label={label} index={index} />
            ))}
          </div>
        </div>
        <div className="px-5 py-3 border-t border-slate-100 flex items-center justify-between bg-slate-50/40">
          <span className="text-xs font-medium text-slate-500">Inadimplência</span>
          <span className="text-sm font-bold text-emerald-600"><span className="panel-arrow inline-block">↓</span> 32% este mês</span>
        </div>
      </div>
    </div>
  )
}
