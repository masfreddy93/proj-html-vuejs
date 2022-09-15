<template>
    <main>
        <section class="section2">
            <div class="container">
                <h5>Choose a course to get started</h5>
                <h2>Latest Featured <mark>Courses</mark></h2>
                <ul class="carousel">
                    <li class="card row-section">
                        <figure class="card-thumbnail col-4">
                            <a href="#"><img src="../assets/images/course-02-480x298.jpg" alt=""></a>
                        </figure>
                        <div class="card-details">
                            <span class="course-price">$40.<span class="course-price-decimals">00</span></span>
                            <a href="#"><p class="course-description">Learning to Write as a Professional Author</p></a>
                            <div class="course-details row-section">
                                <div class="lessons-number row-section">
                                    <font-awesome-icon icon="fa-solid fa-file-lines" />
                                    <span>20 lessons</span>
                                </div>
                                <div class="students-number row-section">
                                    <font-awesome-icon icon="fa-regular fa-user" />
                                    <span>50 students</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="card row-section">
                        <figure class="card-thumbnail col-4">
                            <a href="#"><img src="../assets/images/stock-full-hd-03-480x298.jpg" alt=""></a>
                        </figure>
                        <div class="card-details">
                            <span class="course-price">Free</span>
                            <a href="#"><p class="course-description">Customer-centric Info-Tech Strategies</p></a>
                            <div class="course-details row-section">
                                <div class="lessons-number row-section">
                                    <font-awesome-icon icon="fa-solid fa-file-lines" />
                                    <span>24 lessons</span>
                                </div>
                                <div class="students-number row-section">
                                    <font-awesome-icon icon="fa-regular fa-user" />
                                    <span>769 students</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="card row-section">
                        <figure class="card-thumbnail col-4">
                            <a href="#"><img src="../assets/images/stock-full-hd-04-480x298.jpg" alt=""></a>
                        </figure>
                        <div class="card-details">
                            <span class="course-price">$19.<span class="course-price-decimals">00</span></span>
                            <a href="#"><p class="course-description">Open Programming Courses for Everyone: Python</p></a>
                            <div class="course-details row-section">
                                <div class="lessons-number row-section">
                                    <font-awesome-icon icon="fa-solid fa-file-lines" />
                                    <span>17 lessons</span>
                                </div>
                                <div class="students-number row-section">
                                    <font-awesome-icon icon="fa-regular fa-user" />
                                    <span>62 students</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="card row-section">
                        <figure class="card-thumbnail col-4">
                            <a href="#"><img src="../assets/images/stock-full-hd-06-480x298.jpg" alt=""></a>
                        </figure>
                        <div class="card-details">
                            <span class="course-price">$26.<span class="course-price-decimals">00</span></span>
                            <a href="#"><p class="course-description">Academic Listening and Note-taking</p></a>
                            <div class="course-details row-section">
                                <div class="lessons-number row-section">
                                    <font-awesome-icon icon="fa-solid fa-file-lines" />
                                    <span>14 lessons</span>
                                </div>
                                <div class="students-number row-section">
                                    <font-awesome-icon icon="fa-regular fa-user" />
                                    <span>67 students</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="card row-section">
                        <figure class="card-thumbnail col-4">
                            <a href="#"><img src="../assets/images/course-featured-image-01-480x298.jpg" alt=""></a>
                        </figure>
                        <div class="card-details">
                            <span class="course-price">$39.<span class="course-price-decimals">00</span></span>
                            <a href="#"><p class="course-description">Master jQuery in a Short Period of Time</p></a>
                            <div class="course-details row-section">
                                <div class="lessons-number row-section">
                                    <font-awesome-icon icon="fa-solid fa-file-lines" />
                                    <span>6 lessons</span>
                                </div>
                                <div class="students-number row-section">
                                    <font-awesome-icon icon="fa-regular fa-user" />
                                    <span>51 students</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="card row-section">
                        <figure class="card-thumbnail col-4">
                            <a href="#"><img src="../assets/images/stock-full-hd-05-480x298.jpg" alt=""></a>
                        </figure>
                        <div class="card-details">
                            <span class="course-price">$59.<span class="course-price-decimals">00</span></span>
                            <a href="#"><p class="course-description">Introduction to Javascript for Beginners</p></a>
                            <div class="course-details row-section">
                                <div class="lessons-number row-section">
                                    <font-awesome-icon icon="fa-solid fa-file-lines" />
                                    <span>14 lessons</span>
                                </div>
                                <div class="students-number row-section">
                                    <font-awesome-icon icon="fa-regular fa-user" />
                                    <span>76 students</span>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <button class="button">View All Courses  &#8594;</button>
            </div>
        </section>
    </main>
</template>


<script>

    export default {

    }

</script>



<style lang="scss">

    @import '../style/variables.scss';

    main {
        
        .section2{
            background-color: $section-bg-grey;

            .carousel {
                @include my-display-flex;
                flex-wrap: wrap;

                li {
                    flex-basis: calc(50% - 1rem);
                    justify-content: flex-start;

                    img {
                        max-width: 10.5rem;
                        aspect-ratio: 1;
                        border-radius: 50%;

                    }

                    .card-details {
                        align-self: center;

                        & > span, p {
                            margin-bottom: 1.25rem;
                        }

                        & > span {
                            display: block;
                            font-size: 1.25rem;
                            font-weight: bold;
                            color: $button-bg;

                            .course-price-decimals {
                                font-size: 1rem;
                            }
                        }

                        & > a {
                            line-height: 2rem;
                            font-size: 1.125rem;
                            font-weight: bold;
                        }

                        .course-details {
                            font-size: 0.75rem;
                            font-weight: 400;

                            .lessons-number, .students-number {
                                gap: 0.5rem;
                            }
                        }

                    }

                }
            }
        }

    }

</style>