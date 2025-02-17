import { InformationCircleIcon } from '@heroicons/react/24/outline'
import { twMerge } from 'tailwind-merge'

import { ExternalLink } from '../common/ExternalLink'
import { isNetwork } from '../../util/networks'
import { useNetworksAndSigners } from '../../hooks/useNetworksAndSigners'

function NotificationContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-2 flex w-full justify-center bg-black lg:mb-6">
      <div className="w-full max-w-[1440px] lg:px-8">
        <div className="flex w-full flex-wrap gap-2">{children}</div>
      </div>
    </div>
  )
}

function Notification({
  infoIcon,
  children,
  mode = 'dark'
}: {
  infoIcon?: boolean
  mode?: 'light' | 'dark'
  children: React.ReactNode
}) {
  return (
    <div
      className={twMerge(
        'mx-2 flex w-auto gap-2 rounded-md p-2 px-4 text-sm',
        mode === 'light' ? 'bg-cyan text-dark' : 'bg-dark text-cyan'
      )}
    >
      {infoIcon && (
        <InformationCircleIcon
          className="inline-block h-5 w-5 text-gray-dark"
          aria-hidden="true"
        />
      )}
      {children}
    </div>
  )
}

function NitroDevnetNotification() {
  return (
    <Notification infoIcon>
      <ExternalLink
        href="https://developer.arbitrum.io/for-devs/troubleshooting-building#what-is-a-testnet-or-a-devnet"
        className="arb-hover"
      >
        What is Nitro Testnet?
      </ExternalLink>
    </Notification>
  )
}

export function Notifications() {
  const { l1 } = useNetworksAndSigners()
  const { isGoerli } = isNetwork(l1.network.id)

  return (
    <NotificationContainer>
      {isGoerli && <NitroDevnetNotification />}
    </NotificationContainer>
  )
}
