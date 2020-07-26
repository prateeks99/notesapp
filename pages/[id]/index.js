import fetch from 'isomorphic-unfetch';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Confirm, Button, Loader, Card } from 'semantic-ui-react';

const Note = ({ note }) => {
    const [confirm, setConfirm] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (isDeleting) {
            deleteNote();
        }
    }, [isDeleting])

    const open = () => setConfirm(true);

    const close = () => setConfirm(false);

    const deleteNote = async () => {
        const noteId = router.query.id;
        try {
            const deleted = await fetch(`https://postit-taupe.vercel.app/api/notes/${noteId}`, {
                method: "Delete"
            });

            router.push("/");
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async () => {
        setIsDeleting(true);
        close();
    }

    return (
        <div className="note-container">
            {isDeleting
                ? <Loader active />
                :
                <>
                <div>
                    <div className="verticallycentered">
                    <div className="cardwrapper">
                    <Card fluid centered>
                    <Card.Content>
                    <Card.Header>
                        <h1>{note.title}</h1>
                    </Card.Header>
                    </Card.Content>
                    <Card.Content>
                    <p>{note.description}</p>
                    </Card.Content>
                    <Button color='red' onClick={open}>Delete</Button>
                    </Card>
                    </div>
                    </div>
                </div>
                </>
            }
            <Confirm
                open={confirm}
                onCancel={close}
                onConfirm={handleDelete}
            />
        </div>
    )
}

Note.getInitialProps = async ({ query: { id } }) => {
    const res = await fetch(`http://post-it-prateeks99.vercel.app/api/notes/${id}`);
    const { data } = await res.json();

    return { note: data }
}

export default Note;
