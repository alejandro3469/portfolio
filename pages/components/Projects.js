import React from 'react'
import Card1 from './Card1'

import Card2 from './Card2'

export default function Projects() {
  return (
    <div className="cards-container">
          <div>
            <h2 style={{ "text-align": "center", "margin-top": "32px" }}>
              Some of my personal projects
            </h2>
          </div>
          <Card1 />
          <Card2 />
    </div>
  )
}
