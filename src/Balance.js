import { useQueryCall, useUserPrincipal } from "@ic-reactor/react"
import { jsonToString } from "@ic-reactor/core/dist/utils"
import React from "react"

export const Balance = () => {
  const owner = useUserPrincipal()

  const { data, loading, error } = useQueryCall({
    functionName: "icrc1_balance_of",
    args: [{ owner, subaccount: [] }],
  })

  return (
    <div>
      <h1>Balance</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <p>{jsonToString(data)}</p>}
    </div>
  )
}
