import Interview from '@/components/pages/counseling-page/interview'
import JobCounseling from '@/components/pages/counseling-page/job-counseling'
import Resume from '@/components/pages/counseling-page/resume'
import React from 'react'

const CounselingPage = () => {
  return (
    <div>
      <JobCounseling/>
      <Resume/>
      <Interview/>
    </div>
  )
}

export default CounselingPage
