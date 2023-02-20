/*

useEffect()
useState()

Web API:
fetch()

Promise API:
- async
- await
- Promise

Event loop


HTTP request:
- verb/method: GET, POST, DELETE, PATCH, ...
- request body
- request header
- response body
- response code 404 4** client error 5** server 2** success (httpstatuscode)
- ...
*/

const data = await fetch('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=flw&lang=en').then(data => data.json())

// type PFunction = () => Promise<number>
const p = async () => 1 // some complicated async function networking, file IO


/*
type Promise<T> = {
  then: (result: T) => xxx
  pending: boolean
}
*/
/** @type Promise<number> */
const pPromise = p()
pPromise.then(
    /** @type number */
    result => console.log(result)
)
console.log('ran')

/*
ran
result
*/

const asyncFunction = async () => {
    /** @type number */
    const pResult = await p()
    console.log(pResult)
    console.log('ran')
    // return undefined
}
asyncFunction()

/*
pResult
ran
*/