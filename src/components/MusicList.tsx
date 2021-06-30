import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Music } from '../types/interfaces';
export interface MusicListProps {
	musicData: Music[];
}

export interface MusicListState {}

class MusicList extends React.Component<MusicListProps, MusicListState> {
	state = {};
	render() {
		return (
			<>
				{this.props.musicData.map((music) => (
					<Col lg={3} key={music.id} className="mt-3">
						<Card className="bg-dark text-white">
							<Card.Img
								width={40}
								height={30}
								className="img-fluid"
								src={music.album.cover_big}
								alt="Music Cover image"
							/>
							<Card.ImgOverlay>
								<Card.Title className="bg-light text-secondary border border-dark rounded-pill">
									{music.title}
								</Card.Title>
								<Card.Text className="bg-light text-secondary border border-dark rounded-pill">
									{music.artist.name}
								</Card.Text>
							</Card.ImgOverlay>
							<Card.Footer>
                            <Card.Link href="#">Details</Card.Link>
							
							</Card.Footer>
						</Card>
					</Col>
				))}
			</>
		);
	}
}

export default MusicList;
