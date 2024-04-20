import "./App.css"
import {
  ActorProvider,
  CandidAdapterProvider,
  useAuth,
} from "@ic-reactor/react"
import { Balance } from "./Balance"

function App() {
  const { login, identity } = useAuth()
  return (
    <div>
      <h1>IC Reactor</h1>
      <p>{identity?.getPrincipal().toText()}</p>
      <button onClick={login}>Login</button>
      <CandidAdapterProvider>
        <ActorProvider canisterId="ryjl3-tyaaa-aaaaa-aaaba-cai">
          <Balance />
        </ActorProvider>
      </CandidAdapterProvider>
    </div>
  )
}

export default App
