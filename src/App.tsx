function Inner() {
    const ref = useRef();
    const [instance, setInstance] = useInstance();
    useEffect(() => {
        WebViewer({
            // options
        }, ref.current).then(instance => {
            setInstance(instance)
        })
    }, [])

    return (
        <div ref={ref}></div>
    )
}