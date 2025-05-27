import React from 'react'

const DocFeature = async ({ params }: {
  params: Promise<{ docFeatureId: string }>
}) => {

  const documentationFeatureId = (await (params)).docFeatureId
  return (
    <div>
      Documentation Feature ID = {documentationFeatureId}
    </div>
  )
}

export default DocFeature
