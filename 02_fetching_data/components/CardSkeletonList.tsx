import styles from "../styles/card-skeleton-list.module.css"
import CardSkeleton from "./CardSkeleton"

const CardSkeletonList = () => {
    return (
        <div className={ styles.cardSkeletonList }>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
        </div>
    )
}

export default CardSkeletonList