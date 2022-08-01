import React from 'react'
import $ from 'jquery'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'

function ReactstrapPagination() {
  return (
    <div>
        <h2>reactstrap: Pagination</h2>
        <Pagination size='sm' aria-label='Page navigation example'>
            <PaginationItem>
                <PaginationLink previous onClick={()=>{console.log('previous')}}/>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink onClick={ (e)=>{console.log( $(e.target).text() )} }>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink onClick={ (e)=>{console.log( $(e.target).text() )} }>2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink onClick={ (e)=>{console.log( $(e.target).text() )} }>3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink last onClick={()=>{console.log('last')}}/>
            </PaginationItem>
        </Pagination>
    </div>
  )
}

export default ReactstrapPagination