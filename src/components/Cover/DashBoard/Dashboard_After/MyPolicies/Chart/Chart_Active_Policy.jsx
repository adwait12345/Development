// Import Libraries
import React from 'react'

// Main Function Start
export default function Chart_Active_Policy() {
  return (
    <>
      <div className="Policies-chart">
        <div className="Policies-chart-top">
          <li>Name</li>
          <li>Type</li>
          <li>Policy Amount</li>
          <li>Period</li>
          <li>Claimable Until</li>
          <li>Action</li>
        </div>
        <div className="Policies-chart-bet">
          <p>No record found</p>
        </div>
        <div className="Policies-chart-bot">
          <button>
            <svg width={20} viewBox="0 0 24 24" focusable="false" class="mat-paginator-icon"><path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z" fill='#fff'></path></svg>
          </button>
          <button>
            <svg width={20} viewBox="0 0 24 24" focusable="false" class="mat-paginator-icon"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill='#fff'></path></svg>
          </button>
          <p>0 of 0</p>
          <button>
            <svg width={20} viewBox="0 0 24 24" focusable="false" class="mat-paginator-icon"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill='#fff'></path></svg>
          </button>
          <button>
            <svg width={20} viewBox="0 0 24 24" focusable="false" class="mat-paginator-icon"><path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z" fill='#fff'></path></svg>
          </button>
        </div>
      </div>
    </>
  )
}
