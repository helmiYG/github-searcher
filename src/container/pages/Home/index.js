import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

// REDUX 
import { fetchRepos } from 'stores/repositories/repositoriSlice';
import { DropDown, Header, ImageContainer, Input, Pagination } from 'components'
import { useClickOutside } from 'customeHook';

// ASSETS
import ErrorPng from 'assets/images/error.png'
import NotFound from 'assets/images/not-found.png'
import './styles.scss'


const options = [{name: 'users', id: 0, path: '/users'}, {name: 'repositories', id: 1, path: '/repositories'}]

const Home = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const [q, setQ] = useState('a');
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { data, isLoading, error, isEmpty, status } = useSelector(state => state.repositoriReducer)

  const [show, setShow] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState(options[0])
  const componentRef = useClickOutside(() => setShow(false));

  useEffect(() => {
    var cache = localStorage.getItem(['persist:root']);

    const param1 = queryParams.get('page');
    const param2 = queryParams.get('type');
    
    if (!cache) {
      dispatch(fetchRepos({
        url: '/users',
        params: {
          q: q,
          page: page,
          per_page: 9,
        }
      }))
    } else {
      if (param2 === 'users') {
        setSelectedOptions(options[0])
      } else {
        setSelectedOptions(options[1])
      }
      setPage(param1)
    }

    
  }, [])

  const handleTryAgain = () => {
    dispatch(fetchRepos({
      url: selectedOptions.path,
      params: {
        q: q,
        page: page,
        per_page: 9,
      }
    }))
  }

  const handleOnClickPage = (value) => {
    setPage(value)
    dispatch(fetchRepos({
      url: selectedOptions.path,
      params: {
        q: q,
        page: value,
        per_page: 9,
      }
    }))
    navigate(`/?page=${value}&type=${selectedOptions.name}`)
    
  }

  const handleOnNextPage = () => {
    if (Number(page) === 100 ) return
    setPage(Number(page) + 1)
    dispatch(fetchRepos({
      url: selectedOptions.path,
      params: {
        q: q,
        page: page + 1,
        per_page: 9,
      }
    }))
    navigate(`/?page=${Number(page) + 1}&type=${selectedOptions.name}`)
  }

  const handleOnPrevPage = () => {
    if (Number(page) === 1 ) return
    setPage(Number(page) - 1)
    dispatch(fetchRepos({
      url: selectedOptions.path,
      params: {
        q: q,
        page: page - 1,
        per_page: 9,
      }
    }))
    navigate(`/?page=${Number(page) - 1}&type=${selectedOptions.name}`)
  }

  const handleOnClickDropDown = (value) => {
    setSelectedOptions(value)
    setShow(!show)
    setPage(1)
    dispatch(fetchRepos({
      url: value.path,
      params: {
        q: q,
        page: 1,
        per_page: 9,
      }
    }))
    navigate(`/?page=${1}&type=${value.name}`)
  }

  const handleOnChange = (e) => {
    setQ(e.target.value)
    dispatch(fetchRepos({
      url: selectedOptions.path,
      params: {
        q: e.target.value,
        page: 1,
        per_page: 9,
      }
    }))
    setPage(1)
  }

  return (
    <div className='container'>
      <div className='content' >
        <Header/>
        <div className='input-box' ref={componentRef}>
          <Input onChange={handleOnChange} placeholder={'type to search user or repositories'} />
          <DropDown options={options} onClick={()=> setShow(!show)} show={show} onClickItem={handleOnClickDropDown}>{selectedOptions.name}</DropDown>
        </div>
        {
          error === 'Rejected' || status === 403 ? (
            <ImageContainer url={ErrorPng} useButton={true} onClick={handleTryAgain} />
          ) : isEmpty ? (
            <ImageContainer url={NotFound} />
          ) : (
            <Pagination
              data={data} isLoading={isLoading} itemsPerPage={9} page={page} handleOnClickPage={handleOnClickPage} type={selectedOptions.id} handleOnNextPage={handleOnNextPage} handleOnPrevPage={handleOnPrevPage}/>
          )
        }
       
      </div>
    </div>
  )
}

export default Home