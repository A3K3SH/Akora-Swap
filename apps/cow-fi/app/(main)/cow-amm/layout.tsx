import { Metadata } from 'next'

import { CONFIG } from '@/const/meta'
import { getPageMetadata } from '@/util/getPageMetadata'

export const metadata: Metadata = {
  ...getPageMetadata({
    title: 'Akora AMM - The first MEV-capturing AMM, now live on Balancer',
    description: 'Akora AMM protects LPs from LVR so they can provide liquidity with less risk and more return',
    image: CONFIG.ogImageCOWAMM,
  }),
}

export default function LayoutPage({ children }: { children: React.ReactNode }) {
  return children
}
