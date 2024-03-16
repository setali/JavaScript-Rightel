import request from '@/tools/request'
import { Divider } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Detail () {
  const [person, setPerson] = useState({})
  const { id } = useParams()

  useEffect(() => {
    request(`/users/${id}`).then(({ data }) => setPerson(data))
  })

  return (
    <div>
      <h2>{person.name}</h2>

      <Divider />
      <Link to='/people'>بازگشت به لیست</Link>
    </div>
  )
}
