import { faPlus } from '@fortawesome/free-solid-svg-icons';
import AddActionCard from '../components/add_action_card';

function Add() {
    return (
        <div className="col" style={{ marginTop: '100px', marginBottom: '180px' }}>

            <div className="border border-solid-1 rounded col-9 mx-auto p-5">

                <h5 className="fw-semibold mb-4">
                    Create new content
                </h5>

                <div className="d-flex gap-4 flex-wrap justify-content-between">

                    <AddActionCard
                        icon={faPlus}
                        title="Add new album"
                        description="Create an album and link songs to an artist"
                    />

                    <AddActionCard
                        icon={faPlus}
                        title="Create new playlist"
                        description="Build a custom playlist from your songs"
                    />

                    <AddActionCard
                        icon={faPlus}
                        title="Add new song"
                        description="Upload a song and assign it to an album"
                    />

                </div>

            </div>
        </div>
    );
}

export default Add;
