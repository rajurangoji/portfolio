import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle2, CreditCard, MonitorSmartphone, RefreshCw, ShieldCheck, Webhook } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Badge } from "@/components/Badge";

interface FlowStep {
  icon: LucideIcon;
  label: string;
}

const steps: FlowStep[] = [
  { icon: MonitorSmartphone, label: "Frontend (Pay Now)" },
  { icon: CreditCard, label: "Checkout" },
  { icon: CreditCard, label: "Razorpay Gateway" },
  { icon: ShieldCheck, label: "Verification" },
  { icon: Webhook, label: "Webhook" },
  { icon: CheckCircle2, label: "Confirmation" },
  { icon: RefreshCw, label: "Refund" },
];

export function PaymentFlowDiagram() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-secondary/20 p-6 sm:p-8">
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
      <div className="relative flex items-center justify-between gap-3">
        <h3 className="text-base font-semibold">Razorpay Payment Flow</h3>
        <Badge>Built end-to-end</Badge>
      </div>
      <p className="relative mt-2 max-w-2xl text-sm text-muted-foreground">
        This is a visual walkthrough of the payment lifecycle engineered for the integration — from the customer
        clicking "Pay Now" through gateway processing, server-side verification, webhook confirmation, and refunds.
        There is no live payment backend on this portfolio site itself.
      </p>

      <div className="relative mt-6 flex flex-wrap items-center gap-2 sm:gap-3">
        {steps.map((step, i) => (
          <div key={step.label} className="flex items-center gap-2 sm:gap-3">
            <motion.div
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              className="glass flex flex-col items-center gap-1.5 rounded-lg border border-border px-3 py-2.5 text-center"
            >
              <step.icon className="h-4 w-4 text-chart-2" aria-hidden="true" />
              <span className="text-[11px] font-medium leading-tight text-muted-foreground">{step.label}</span>
            </motion.div>
            {i < steps.length - 1 && (
              <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground/50" aria-hidden="true" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
