import { ReportItem } from '../data/reportData';

export interface CopyHistoryItem {
  id: string;
  reportId: string;
  title: string;
  targetInjected: string;
  victimInjected: string;
  timestamp: number;
  timeFormatted: string;
}

export const injectVariables = (
  text: string,
  target: string,
  victim: string
): string => {
  const targetVal = target.trim() || '[TARGET]';
  const victimVal = victim.trim() || '[VICTIM]';

  // Replace case-insensitively and globally
  return text
    .split('[TARGET]').join(targetVal)
    .split('[VICTIM]').join(victimVal)
    .split('{TARGET}').join(targetVal)
    .split('{VICTIM}').join(victimVal);
};

export const downloadAsTxtFile = (
  report: ReportItem,
  target: string,
  victim: string
) => {
  const resolvedAppeal = injectVariables(report.appealTemplate, target, victim);
  const dateStr = new Date().toLocaleString('en-US', {
    dateStyle: 'full',
    timeStyle: 'medium',
  });

  const content = `======================================================================
SIGNAL HACKERS CSB - ENTERPRISE TOOLKIT PRO v5.0
HIGH-POWERED CYBERSECURITY REPORT & LEGAL TAKEDOWN APPEAL
======================================================================
REPORT TITLE      : ${report.title}
BANGLA TITLE      : ${report.banglaTitle}
MODULE            : ${report.moduleName}
PLATFORM          : ${report.platform.toUpperCase()}
SEVERITY LEVEL    : ${report.severity}
GENERATED AT      : ${dateStr}

TARGET PROFILE/URL: ${target.trim() || 'NOT SPECIFIED [TARGET]'}
VICTIM ENTITY/URL : ${victim.trim() || 'NOT SPECIFIED [VICTIM]'}
OFFICIAL FORM     : ${report.officialFormUrl || 'N/A'} (${report.formName || 'Direct In-App Reporting'})

----------------------------------------------------------------------
EXECUTION INSTRUCTIONS:
${report.instructions.map((inst, i) => `${i + 1}. ${inst}`).join('\n')}

======================================================================
INJECTED LEGAL APPEAL / REPORT DISPATCH:
======================================================================

${resolvedAppeal}

======================================================================
SECURITY DIRECTIVE:
Generated via Signal Hackers CSB Enterprise v5.0.
Authorized use for legitimate cyber grievance resolution & identity protection.
Official Channel: https://t.me/signalhackers
======================================================================
`;

  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const sanitizedName = report.title
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '_')
    .slice(0, 30);
  const link = document.createElement('a');
  link.href = url;
  link.download = `CSB_v50_${sanitizedName}_${Date.now()}.txt`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
