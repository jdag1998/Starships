import { useEffect, useState } from "react"


const useFetch = () => {


    const [ships, setShips] = useState(null)

    const [pending, setPending] = useState(true)


    useEffect(() => {

            const getShips = async () => {

                try {

                    const response = await fetch(`https://swapi.dev/api/starships/`)

                    const data = await response.json()

                    setShips(data)

                    setPending(false)

                } catch (err) {

                    console.log ("Not Data to display")

                    console.log(err)

                }

            }

            getShips()

        })
        

    return { ships, pending }
}

export default useFetch;