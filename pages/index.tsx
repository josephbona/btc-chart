import Head from 'next/head'
import Layout from '@components/layout'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { useRouter } from 'next/router'
import { Card, Title, LineChart, Legend } from '@tremor/react'
import { abbreviateNumberByMagnitude, classNames } from '@lib/utils'
import { Stat } from '@lib/types'
import { api } from '@lib/env'

interface HomeProps {
  data: Stat[]
}

export default function Home(props: HomeProps) {
  const router = useRouter()
  const tabs = [
    { href: '/', name: '1M' },
    { href: '/?start=2022-12-01&end=2023-02-01', name: '3M' },
    { href: '/?start=2022-02-01&end=2023-02-01', name: '12M' },
    { href: '/?start=2023-01-01&end=2023-02-01', name: 'YTD' },
    { href: '/?start=2010-07-18&end=2023-02-01', name: 'All' }
  ]
  return (
    <Layout home>
      <Head>
        <title>BTC Address Balances over Time</title>
      </Head>
      <section>
        <div className="max-w-screen-xl mx-auto p-8">
          <Card>
            <div className='sm:flex justify-between items-center sm:space-y-0 space-y-2'>
              <Title>BTC Address Balances over Time</Title>
              <Legend
                className='mt-3 space-x-2 text-sm'
                categories={['>$1k', '>$10k', '>$100k', '>$1M', '>$10M']}
                colors={['blue', 'slate', 'cyan', 'red', 'green']}
              />
            </div>
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-4 sm:space-x-6">
                {tabs.map((tab) => (
                  <a
                    key={tab.name}
                    href={tab.href}
                    className={classNames(
                      router.asPath === tab.href
                        ? 'border-indigo-500 text-indigo-600'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                      'whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium hover:no-underline'
                    )}
                  >
                    {tab.name}
                  </a>
                ))}
              </nav>
            </div>
            <LineChart
              className="mt-6 h-96"
              data={props.data}
              index="time"
              categories={[
                'over $1K',
                'over $10K',
                'over $100K',
                'over $1M',
                'over $10M',
              ]}
              colors={['blue', 'slate', 'cyan', 'red', 'green']}
              valueFormatter={(value) =>
                abbreviateNumberByMagnitude(value, { fixed: 2 })
              }
              showLegend={false}
            />
          </Card>
          {/* Hack to get these classnames for Legend in Tailwind JIT build (seems to be a bug with Tremor v2) */}
          <div className="mr-1.5" />
          <div className="mr-2.5" />
        </div>
      </section>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const baseUrl = `${api.host}/api/btc-addresses`
  // default to 1M
  let url = `${baseUrl}?start=2023-01-01&end=2023-02-01`
  if (context.query?.start && context.query?.end) {
    url = `${baseUrl}?start=${context.query.start}&end=${context.query.end}`
  }
  const res = await fetch(url)
  const data = await res.json()
  return {
    props: {
      data,
    },
  }
}
