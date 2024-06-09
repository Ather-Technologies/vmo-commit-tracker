import React, {useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Pagination from '@mui/material/Pagination';
import Link from '@mui/material/Link';
import CircularProgress from '@mui/material/CircularProgress';

export default function CommitHistory() {
  const [commitHistoryData, setCommitHistoryData] = React.useState([{}]);
  const [page, setPage] = React.useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.github.com/repos/ozjuly19/vmo-frontend/commits');
      const data = await response.json();
      setCommitHistoryData(data);
      console.log(data);
    };

    fetchData();
  }, []);


  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Container fixed sx={{ mb: 2 }}>
        {commitHistoryData.length > 1 ? commitHistoryData
          .slice((page - 1) * itemsPerPage, page * itemsPerPage)
          .map((singleCommit, index) => (
            <Card key={index} sx={{ mb: 2 }}>
              <CardContent>
                <h3>Date: {new Date(singleCommit.commit.author.date).toLocaleString()}</h3>
                <p>{singleCommit.commit.author.name}: {singleCommit.commit.message}</p>
                <Link target="_blank" rel="noopener" href={singleCommit.html_url}>View commit on Github</Link>
              </CardContent>
            </Card>
          )) : <CircularProgress />}
      <Pagination count={Math.ceil(commitHistoryData.length / itemsPerPage)} page={page} onChange={handlePageChange} />
    </Container>
  );
}